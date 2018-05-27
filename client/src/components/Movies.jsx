import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let { movies, handleMovieClick } = this.props;
    
    let movieList = movies.map((movie, idx) => {
      return (
        <li key={idx} className="movie_item" onClick={ () => handleMovieClick(movie, idx) }>
          <img src={ 'https://image.tmdb.org/t/p/w500/' + movie.poster_path }/>
          <div className="movie_description">
            <h2>{ movie.title }</h2>
            <section className="movie_details">
              <div className="movie_year">
                <span className="title">Vote Count: </span>
                <span>{ movie.vote_count }</span>
              </div>
              <div className="movie_rating">
                <span className="title">Rating: </span>
                <span>{ movie.vote_average }</span>
              </div>
            </section>
          </div>
        </li>
      );
    });

    return (
      <ul className="movies">
        { movieList }
      </ul>
    );
  }
}

export default Movies;