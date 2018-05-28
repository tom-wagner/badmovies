import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };
    
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  // populate action movies and fetch favorites at page load
  componentDidMount() {
    this.getMovies(80);
    this.getFavorites();
  }

  getMovies(genreID) {
    axios
      .get('/search', { params: { with_genres: genreID }})
      .then(resp => this.setState({ movies: resp.data.results }))
      .catch(err => console.log({ err }));
  }

  getFavorites() {
    axios
      .get('/favorites')
      .then(favorites => this.setState({ favorites: favorites.data }))
      .catch(err => console.log({ err }));
  }

  handleMovieClick(movie, idx) {
    // delete the movie from favorites if the user is on the favorites page
    if (this.state.showFaves) {
      this.deleteMovie(movie, idx);
    } else {
      // else: save the movie to favorites
      this.saveMovie(movie);
    }
  }

  saveMovie(movie) {
    axios
      .post('/save', { data: { movie }})
      .then(result => {
        // rudimentary way to let the user know their action succeeded
        window.alert('movie saved successfully!');

        // helpful details on this syntax: https://stackoverflow.com/a/43003547
        this.setState({ favorites: [...this.state.favorites, movie] });
      })
      .catch(err => {
        window.alert('movie already saved to your favorites');
      })
  }

  deleteMovie(movie, idx) {
    axios
      .post('/delete', { data: { id: movie.id }})
      .then(result => {
        // update favorites
        this.getFavorites();
      })
      .catch(err => {
        console.log('Error deleting: ', err);
      });
  }

  swapFavorites() {
    // don't touch
    this.setState({ showFaves: !this.state.showFaves });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        <div className="main">
          <Search
            swapFavorites={ this.swapFavorites }
            showFaves={ this.state.showFaves }
            getMovies={ this.getMovies }
          />
          <Movies
            movies={ this.state.showFaves ? this.state.favorites : this.state.movies }
            showFaves={ this.state.showFaves }
            handleMovieClick= { this.handleMovieClick }
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));