var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();

var { getMoviesByGenre, getGenres } = require('./apiHelpers.js');

app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function(req, res) {
    getMoviesByGenre(req.query)
        .then(results => res.status(200).send(results.data))
        .catch(err => res.status(500).send('server error - please try again later!'));
});

app.get('/genres', function(req, res) {
    getGenres()
        .then(results => res.status(200).send(results.data))
        .catch(err => res.status(500).send('server error - please try again later!'));
});

app.post('/save', function(req, res) {

});

app.post('/delete', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});