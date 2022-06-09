CREATE SCHEMA test;

USE test;

CREATE TABLE `test`.`person` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `age` INT NOT NULL,
  PRIMARY KEY (`id`));
  
  
INSERT INTO person VALUES (0, "Maximo", "Yañez", 21);

SELECT * FROM person;



