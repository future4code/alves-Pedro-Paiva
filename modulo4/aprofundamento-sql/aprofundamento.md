SELECT * FROM Movies;

ALTER TABLE Actor
ADD hometown VARCHAR(255);
SELECT * FROM Actor;
UPDATE Actor SET hometown = "Mossoró" WHERE id = "001";
SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
UPDATE Actor SET nome = "Moacyr Franco", birth_date = "2020-02-10" 
WHERE id = "003";
ALTER TABLE Actor CHANGE id id INT auto_increment;
UPDATE Actor
SET nome = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000,
gender = "male" WHERE id = "005";

DELETE FROM Actor WHERE nome = "Tony Ramos";
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
SELECT MAX(salary) from Actor;
SELECT MIN(salary) from Actor where gender = "female";
SELECT COUNT(*) from Actor where gender = "female";
SELECT * FROM Actor ORDER BY nome ASC;

ALTER TABLE Movies add playing_limit_date VARCHAR(255);
ALTER TABLE Movies CHANGE playing_limit_date playing_limit_date DATE;
UPDATE Movies set playing_limit_date = "2022-10-15" where id = 001;