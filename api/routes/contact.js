'use strict';

const express  = require('express');
const { body, validationResult } = require('express-validator');
const db       = require('../db/connection');
const { sendContactNotification, sendAutoReply } = require('../services/mailer');

const router = express.Router();

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required.')
    .isLength({ min: 2, max: 120 }).withMessage('Name must be between 2 and 120 characters.'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Please enter a valid email address.')
    .normalizeEmail(),

  body('phone')
    .optional({ checkFalsy: true })
    .trim()
    .isMobilePhone('any').withMessage('Please enter a valid phone number.'),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required.')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters.')
];

// POST /contact
router.post('/', contactValidation, async (req, res) => {
  // Return validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      errors: errors.array().map(e => ({ field: e.path, message: e.msg }))
    });
  }

  const { name, email, phone, message } = req.body;
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;

  try {
    // Save to database
    const [result] = await db.execute(
      `INSERT INTO contacts (name, email, phone, message, ip_address)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone || null, message, ip]
    );

    // Send emails (non-blocking — don't fail the request if email fails)
    Promise.allSettled([
      sendContactNotification({ name, email, phone, message }),
      sendAutoReply({ name, email })
    ]).then(results => {
      results.forEach((r, i) => {
        if (r.status === 'rejected') {
          console.error(`Email ${i === 0 ? 'notification' : 'auto-reply'} failed:`, r.reason?.message);
        }
      });
    });

    return res.status(201).json({
      success: true,
      message: 'Your message has been received. We will be in touch within one business day.',
      id: result.insertId
    });

  } catch (err) {
    console.error('Contact form error:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again or email us directly at info@zendata-avenue.co.za'
    });
  }
});

module.exports = router;
