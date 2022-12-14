DROP DATABASE IF EXISTS pizza;

CREATE DATABASE pizza;

USE pizza;

CREATE TABLE customer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    login_id INT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    address VARCHAR(30) NOT NULL,
    phone_number INT NOT NULL
);
CREATE TABLE driver (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    driver_id INT,
    size INT NOT NULL,
    cheese BOOLEAN NOT NULL,
    pepperroni BOOLEAN NOT NULL,
    hamburger BOOLEAN NOT NULL,
    order_status INT NOT NULL,
    FOREIGN KEY (customer_id)
    REFERENCES customer(id),
    FOREIGN KEY (driver_id)
    REFERENCES driver(id)
);