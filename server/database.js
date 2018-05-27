const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllFavorites = function(callback) {
  // get favorites from the database
};

const saveFavorite = function(callback) {
  // save movie to favorites in the database
};

const deleteFavorites = function(callback) {
  // delete a movie from favorites in the database
};

module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};

// hit this endpoint: https://developers.themoviedb.org/3/discover/movie-discover