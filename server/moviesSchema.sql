DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favorites (
  id INT(20) NOT NULL,
  title varchar(200),
  vote_average INT(20),
  vote_count INT(20),
  poster_path varchar(200),
  backdrop_path varchar(200),
  overview varchar(1000),
  release_date varchar(200),
  PRIMARY KEY (id)
);