USE `alves-pedro-paiva`;

CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY, 
	nome VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL, 
    gender VARCHAR (6) NOT NULL
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("001", "Tony Ramos", 400000, "1948-08-25", "male");

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("002", "Gloria Pires", 1200000, "1963-08-23", "female");

SELECT * FROM Actor;
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

SELECT * FROM Actor WHERE gender = "female";
SELECT salary FROM Actor WHERE nome = "Tony Ramos";
SELECT * FROM Actor WHERE gender = "invalid";
SELECT id, nome, salary FROM Actor WHERE salary <= 500000;
SELECT id, nome from Actor WHERE id = "002";
SELECT * FROM Actor WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salary >30000 ;
SELECT * FROM Actor WHERE  (nome NOT LIKE "A%") AND salary > 350000;
SELECT * FROM Actor WHERE nome LIKE "%G%" OR "%g%";
SELECT * FROM Actor WHERE (nome LIKE "%G%" OR nome LIKE "%g%" OR nome LIKE "%A%" OR nome LIKE "%a%") AND (salary between 350000 AND 900000) ;

