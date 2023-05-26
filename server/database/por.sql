DROP DATABASE IF EXISTS POR;
CREATE DATABASE POR;

USE POR;

DROP TABLE IF EXISTS user;
CREATE TABLE list(
    id INT UNSIGNED,
    value BIGINT UNSIGNED,
    random BIGINT UNSIGNED
);

INSERT INTO list (id,value,random) VALUES (0,0,0);
INSERT INTO list (id,value,random) VALUES (1,0,0);
INSERT INTO list (id,value,random) VALUES (2,0,0);
INSERT INTO list (id,value,random) VALUES (3,0,0);
INSERT INTO list (id,value,random) VALUES (4,0,0);
INSERT INTO list (id,value,random) VALUES (5,0,0);
