DROP DATABASE IF EXISTS burgers_sequelize_db;
CREATE DATABASE burgers_sequelize_db;

USE burgers_sequelize_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);



