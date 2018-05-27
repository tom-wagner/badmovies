
const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../server/config.js');

const getMoviesByGenre = queryObj => {
  // configure query object to get the results you want
  queryObj.api_key = API_KEY;
  queryObj.language = 'en-US';
  queryObj.sort_by = 'vote_average.asc';
  queryObj['vote_count.gte'] = 100;

  return axios.get('https://api.themoviedb.org/3/discover/movie', { params: queryObj });
};

const getGenres = () => {
  let queryObj = { api_key: API_KEY, language: 'en-US' };
  return axios.get('https://api.themoviedb.org/3/genre/movie/list', { params: queryObj })
};

module.exports = { getMoviesByGenre, getGenres };