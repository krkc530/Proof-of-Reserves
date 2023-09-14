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
    unit VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS UserAssets;
CREATE TABLE UserAssets (
    userId INT,
    assetId INT,
    balance CHAR(64) NOT NULL,
    random CHAR(64) NOT NULL,
    comX CHAR(66),
    comY CHAR(66),
    PRIMARY KEY (userId, assetId)
);

INSERT INTO Assets (assetName, logoUrl, unit) VALUES ('STO1', 'https://res.cloudinary.com/nuri/image/upload/v1694680280/por/fqnl7edbqiqzrwhlpfrj.png', 'Token');
INSERT INTO Assets (assetName, logoUrl, unit) VALUES ('STO2', 'https://res.cloudinary.com/nuri/image/upload/v1694680280/por/srihqafaw1ngahwfwj7u.png', 'Token');
INSERT INTO Assets (assetName, logoUrl, unit) VALUES ('STO3', 'https://res.cloudinary.com/nuri/image/upload/v1694680280/por/p9673nfdf0o8j6cttrsv.png', 'Token');
INSERT INTO Assets (assetName, logoUrl, unit) VALUES ('Wangsimni CBDC', 'https://res.cloudinary.com/nuri/image/upload/v1694680280/por/io8mldzd9adjycdgz9ln.png', '₩');
INSERT INTO Assets (assetName, logoUrl, unit) VALUES ('Zkrypto CBDC', 'https://res.cloudinary.com/nuri/image/upload/v1694680280/por/w4pk3sisdeisehmcgpzh.png', '₩');
INSERT INTO Assets (assetName, logoUrl, unit) VALUES ('Hanyang CBDC', 'https://res.cloudinary.com/nuri/image/upload/v1694680280/por/xfxoq7eujxzzadvqpn0t.png', '₩');
INSERT INTO Assets (assetName, logoUrl, unit) VALUES ('Ethereum', 'https://res.cloudinary.com/nuri/image/upload/v1694680280/por/qalbqowne5iailgddvsh.png', 'ETH');

DROP TABLE IF EXISTS Reports;
CREATE TABLE Reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    assetId INT,
    comX CHAR(66),
    comY CHAR(66),
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
