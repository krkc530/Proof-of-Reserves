DROP DATABASE IF EXISTS POR;
CREATE DATABASE POR;

USE POR;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
    user_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(32) NOT NULL
);

DROP TABLE IF EXISTS Assets;
CREATE TABLE Assets (
    asset_id INT AUTO_INCREMENT PRIMARY KEY,
    asset_name VARCHAR(32) NOT NULL,
    logo_url VARCHAR(128) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    balance CHAR(64) NOT NULL
);

DROP TABLE IF EXISTS UserAssets;
CREATE TABLE UserAssets (
    user_id INT,
    asset_id INT,
    balance CHAR(64) NOT NULL,
    random CHAR(64) NOT NULL,
    is_stored BOOLEAN,
    com_x CHAR(66),
    com_y CHAR(66),
    PRIMARY KEY (user_id, asset_id)
);

INSERT INTO Assets (asset_name, logo_url, unit, balance) VALUES ('STO1', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'Token', '0');
INSERT INTO Assets (asset_name, logo_url, unit, balance) VALUES ('STO2', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'Token', '0');
INSERT INTO Assets (asset_name, logo_url, unit, balance) VALUES ('STO3', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'Token', '0');
INSERT INTO Assets (asset_name, logo_url, unit, balance) VALUES ('Wangsimni CBDC', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'WON', '0');
INSERT INTO Assets (asset_name, logo_url, unit, balance) VALUES ('Zkrypto CBDC', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'WON', '0');
INSERT INTO Assets (asset_name, logo_url, unit, balance) VALUES ('Hanyang CBDC', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'WON', '0');
INSERT INTO Assets (asset_name, logo_url, unit, balance) VALUES ('Ethereum', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'ETH', '0');

DROP TABLE IF EXISTS Reports;
CREATE TABLE Reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    asset_id INT,
    com_x CHAR(66),
    com_y CHAR(66),
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
