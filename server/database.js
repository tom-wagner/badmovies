const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllFavorites = function(callback) {
  const myQuery = `SELECT * FROM favorites;`
  connection.query(myQuery, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

const saveFavorite = function(movie, callback) {
  let { id, title, vote_average, vote_count, poster_path, backdrop_path, release_date } = movie;
  let queryString = `INSERT INTO favorites (id, title, vote_average, vote_count, poster_path, backdrop_path, release_date) VALUES (${id}, '${title}', ${vote_average}, ${vote_count}, '${poster_path}', '${backdrop_path}', '${release_date}');`;

  connection.query(queryString, (err, success) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, success)
    }
  });
  
};

const deleteFavorite = function(movieID, callback) {
  const queryString = `DELETE FROM favorites WHERE id = '${movieID}'`;
  connection.query(queryString, (err, success) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, success);
    }
  });
};

module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite,
};