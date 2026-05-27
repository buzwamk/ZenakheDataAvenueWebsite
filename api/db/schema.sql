-- Zenakhe Digital Solutions — Database Schema
-- Run this once on the server: mysql -u zenakhe -p zenakhe_prod < schema.sql

CREATE DATABASE IF NOT EXISTS zenakhe_prod
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE zenakhe_prod;

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(120)  NOT NULL,
  email       VARCHAR(255)  NOT NULL,
  phone       VARCHAR(30)   DEFAULT NULL,
  message     TEXT          NOT NULL,
  ip_address  VARCHAR(45)   DEFAULT NULL,
  status      ENUM('new', 'read', 'replied') DEFAULT 'new',
  created_at  DATETIME      DEFAULT CURRENT_TIMESTAMP,
  updated_at  DATETIME      DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email   (email),
  INDEX idx_status  (status),
  INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
