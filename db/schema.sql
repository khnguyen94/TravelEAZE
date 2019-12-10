DROP DATABASE IF EXISTS travelapp_db;
CREATE DATABASE travelapp_db;

-- Users Table
USE travelapp_db; 
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    traveler_id VARCHAR(30) NOT NULL, 
    email VARCHAR(30) NOT NULL, 
    native_language_code VARCHAR(30) NOT NULL, 
    home_airport_code VARCHAR(30) NOT NULL, 
    destinations_1 INT NOT NULL,
    destinations_2 INT NOT NULL,
    destinations_3 INT NOT NULL,
    destinations_4 INT NOT NULL,
    PRIMARY KEY (id)
);

USE travelapp_db; 
SELECT * FROM users;


-- Destinations Table
USE travelapp_db; 
CREATE TABLE destinations(
    id INT NOT NULL AUTO_INCREMENT,
    traveler_id VARCHAR(30) NOT NULL, 
	destination VARCHAR(30) NOT NULL, 
    starting_date DATETIME(6),
    ending_date DATETIME(6),
	PRIMARY KEY (id)
); 

USE travelapp_db; 
SELECT * FROM destinations;


-- Languages ID Table
USE travelapp_db; 
CREATE TABLE languages(
    id INT NOT NULL AUTO_INCREMENT,
	country VARCHAR(30) NOT NULL, 
    language_id VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
); 

USE travelapp_db; 
SELECT * FROM languages;