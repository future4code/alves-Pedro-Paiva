//RESPOSTAS EXERCICIOS ATORES


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

//RESPOSTAS EXERCICIOS FILMES

CREATE TABLE Movies (
	id VARCHAR (255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE, 
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movies( id, title, synopsis, release_date, rating)
VALUES ("004", "Deus é Brasileiro", "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.", "2003-01-31", 9 );

INSERT INTO Movies( id, title, synopsis, release_date, rating)
VALUES ("001", "se eu fosse você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7),
 ("002", "Doce de mae", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10),
 ("003", "Dona flor e seus dois maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);

SELECT * FROM Movies;
SELECT id, title, rating FROM Movies WHERE id = "003";
SELECT id, title, synopsis FROM Movies WHERE rating >= 7;


