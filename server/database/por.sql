DROP DATABASE IF EXISTS POR;
CREATE DATABASE POR;

USE POR;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
    userId INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(32) NOT NULL
);

DROP TABLE IF EXISTS Assets;
CREATE TABLE Assets (
    assetId INT AUTO_INCREMENT PRIMARY KEY,
    assetName VARCHAR(32) NOT NULL,
    logoUrl VARCHAR(128) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    balance CHAR(64) NOT NULL
);

DROP TABLE IF EXISTS UserAssets;
CREATE TABLE UserAssets (
    userId INT,
    assetId INT,
    balance CHAR(64) NOT NULL,
    random CHAR(64) NOT NULL,
    isStored BOOLEAN,
    comX CHAR(66),
    comY CHAR(66),
    PRIMARY KEY (userId, assetId)
);

INSERT INTO Assets (assetName, logoUrl, unit, balance) VALUES ('STO1', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'Token', '0');
INSERT INTO Assets (assetName, logoUrl, unit, balance) VALUES ('STO2', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'Token', '0');
INSERT INTO Assets (assetName, logoUrl, unit, balance) VALUES ('STO3', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'Token', '0');
INSERT INTO Assets (assetName, logoUrl, unit, balance) VALUES ('Wangsimni CBDC', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'WON', '0');
INSERT INTO Assets (assetName, logoUrl, unit, balance) VALUES ('Zkrypto CBDC', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'WON', '0');
INSERT INTO Assets (assetName, logoUrl, unit, balance) VALUES ('Hanyang CBDC', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'WON', '0');
INSERT INTO Assets (assetName, logoUrl, unit, balance) VALUES ('Ethereum', 'https://res.cloudinary.com/demo/image/upload/w_128/sofa_cat.jpg', 'ETH', '0');

DROP TABLE IF EXISTS Reports;
CREATE TABLE Reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    assetId INT,
    comX CHAR(66),
    comY CHAR(66),
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
