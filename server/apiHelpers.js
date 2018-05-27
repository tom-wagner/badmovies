
const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../server/config.js');

const getMoviesByGenre = queryObj => {
  return axios.get('https://api.themoiedb.org/3/discover/movie', { params: queryObj });
};

const getGenres = () => {
  let queryObj = { api_key: API_KEY, language: 'en-US' };
  return axios.get('https://api.themoviedb.org/3/genre/movie/list', { params: queryObj })
};

module.exports = { getMoviesByGenre, getGenres };