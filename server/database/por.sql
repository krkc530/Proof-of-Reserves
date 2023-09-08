DROP DATABASE IF EXISTS POR;
CREATE DATABASE POR;

USE POR;

DROP TABLE IF EXISTS user_list;
CREATE TABLE user_list(
    id INT UNSIGNED NOT NULL,
    asset_idx INT UNSIGNED NOT NULL,
    value BIGINT UNSIGNED,
    random BIGINT UNSIGNED,
    UNIQUE (id, asset_idx)
);

DROP TABLE IF EXISTS balance_list;
CREATE TABLE balance_list(
    asset_idx INT UNSIGNED NOT NULL,
    balance BIGINT UNSIGNED,
    UNIQUE (asset_idx)
);

