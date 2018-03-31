const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllFavorites = function(callback) {
  //get favorites from the database
};
const saveFavorite = function(callback) {
  //get favorites from the database
};
const deleteFavorites = function(callback) {
  //get favorites from the database
};
module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};