'use strict';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST || 'smtp.gmail.com',
  port:   parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

/**
 * Send notification email to Zenakhe team when a contact form is submitted.
 */
async function sendContactNotification({ name, email, phone, message }) {
  const mailOptions = {
    from:    `"Zenakhe Website" <${process.env.SMTP_USER}>`,
    to:      process.env.NOTIFY_EMAIL,
    subject: `New Contact Form Submission — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #221638; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #ff5d22; margin: 0;">New Contact Submission</h2>
          <p style="color: #ffffff; margin: 4px 0 0;">zendata-avenue.co.za</p>
        </div>
        <div style="background: #f8f4ff; padding: 24px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #221638; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #444;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #221638;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ff5d22;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #221638;">Phone</td>
              <td style="padding: 8px 0; color: #444;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #221638; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #444; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #ddd;">
            <a href="mailto:${email}?subject=Re: Your enquiry to Zenakhe Digital Solutions"
               style="background: #ff5d22; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">
              Reply to ${name}
            </a>
          </div>
        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
}

/**
 * Send auto-reply to the person who submitted the form.
 */
async function sendAutoReply({ name, email }) {
  const mailOptions = {
    from:    `"Zenakhe Digital Solutions" <${process.env.SMTP_USER}>`,
    to:      email,
    subject: 'We received your message — Zenakhe Digital Solutions',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #221638; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #ff5d22; margin: 0;">Thank you, ${name}!</h2>
        </div>
        <div style="background: #f8f4ff; padding: 24px; border-radius: 0 0 8px 8px;">
          <p style="color: #444;">We have received your message and will get back to you within <strong>one business day</strong>.</p>
          <p style="color: #444;">In the meantime, feel free to explore our services at
            <a href="https://www.zendata-avenue.co.za" style="color: #ff5d22;">zendata-avenue.co.za</a>.
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #888; font-size: 13px;">
            Zenakhe Digital Solutions<br>
            132 Apollo St, Table View, Cape Town<br>
            +27 66 400 8274 | info@zendata-avenue.co.za
          </p>
        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendContactNotification, sendAutoReply };
