import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)

  }
//



//    Make an onclick for each list item. If the movies shown is the search results, 
//.   add it to the db (do it in the main app, and passs down the function). 

//.   If youre currently showing the fave list, delete the movie instead
//.   you can tell which list it is based on whether the prop "showFaves" is false (search results) or true (fave list)


//
  render() {
    return (
        <ul className="movies">
{/*


    Make this to be dynamic


*/}
          <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300"/>
            <div className="movie_description">
              <h2>De Wae</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>2018</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>10.0</span>
                </div>
              </section>
            </div>
          </li>
          <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300"/>
            <div className="movie_description">
              <h2>De Wae</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>2018</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>10.0</span>
                </div>
              </section>
            </div>
          </li>
          <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300"/>
            <div className="movie_description">
              <h2>De Wae</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>2018</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>10.0</span>
                </div>
              </section>
            </div>
          </li>
          <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300"/>
            <div className="movie_description">
              <h2>De Wae</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>2018</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>10.0</span>
                </div>
              </section>
            </div>
          </li>
          <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300"/>
            <div className="movie_description">
              <h2>De Wae</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>2018</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>10.0</span>
                </div>
              </section>
            </div>
          </li>
          <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300"/>
            <div className="movie_description">
              <h2>De Wae</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>2018</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>10.0</span>
                </div>
              </section>
            </div>
          </li>
          <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300"/>
            <div className="movie_description">
              <h2>De Wae</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>2018</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>10.0</span>
                </div>
              </section>
            </div>
          </li>
          <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300"/>
            <div className="movie_description">
              <h2>De Wae</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>2018</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>10.0</span>
                </div>
              </section>
            </div>
          </li>
          <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300"/>
            <div className="movie_description">
              <h2>De Wae</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>2018</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>10.0</span>
                </div>
              </section>
            </div>
          </li>

        </ul>)
  }
}

export default Movies