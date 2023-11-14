CREATE DATABASE miniBase;

USE miniBase;

CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(256)
);

SELECT * FROM users;

INSERT INTO users (name)VALUES ("Markus");
INSERT INTO users (name)VALUES ("Filipa");
INSERT INTO users (name)VALUES ("Daniel");
