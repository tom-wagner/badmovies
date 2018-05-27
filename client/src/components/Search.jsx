import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      selectedGenreID: 80,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.getGenres = this.getGenres.bind(this);
  }
  
  getGenres() {
    axios.get('/genres')
      .then(resp => this.setState({ genres: resp.data.genres }))
      .catch(err => console.log({ err }));
  }

  componentDidMount() {
    this.getGenres();
  }

  handleSelect(event) {
    this.setState({ selectedGenreID: event.target.value });
  }

  render() {
    let { genres, selectedGenreID } = this.state;
    let { getMovies, swapFavorites, showFaves } = this.props;

    let genreList = genres.map(genre => {
      return (
        <option key={genre.id} value={genre.id}>{genre.name}</option>
      );
    });

    return (
      <div className="search">
        <button onClick={() => { swapFavorites() }}>{ showFaves ? "Show Results" : "Show Favorites" }</button>
        <br/><br/>
        <select onChange={ this.handleSelect }>
          { genreList }
        </select>
        <br/><br/>
        <button onClick={ () => getMovies(selectedGenreID) }>Search</button>
      </div>
    );
  }
}

export default Search;