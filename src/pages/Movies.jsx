import React, { Component } from 'react';
import SimpleSlider from '../components/Slider/Slider';
import "../scss/pages/Movies.scss";

import TopRatedList from "../components/movie/TopRatedList";
class Movies extends Component {
    state = { 
        mostPopular: [],
        categoryMovies: [],
        choosedCategory: "trending/movie/week"
     }

    fetchPopularMovies = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=77731e0cef7708f81c46f924efbac553&language=pl-PL&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
  
    .then(response => response.json())
    .then(json => this.setState({ mostPopular: json.results}))
      }

    fetchCategoryMovies = () => {
        fetch(`https://api.themoviedb.org/3/${this.state.choosedCategory}?api_key=77731e0cef7708f81c46f924efbac553&language=pl-PL&page=1`)
        .then(response => response.json())
        .then(json => this.setState({categoryMovies: json.results}))
    }
  
      componentDidMount() {
        this.fetchPopularMovies()
        this.fetchCategoryMovies()
        
      }

      componentDidUpdate(prevProps, prevState) {
        if(this.state.choosedCategory !== prevState.choosedCategory){
                  this.fetchCategoryMovies();
        } else {
            console.log('Zmieniam kategorię')
        }
  }
        
      category = (props) => {
         this.setState({
             choosedCategory: props
         })
      }

    render() { 
        return ( 
            <>
              <div className="movies">
                  <SimpleSlider moviesList={this.state.mostPopular}/>
                  <div className="movies-list-cont">
                    <div className="container">
                        <div className="welcome">
                            <div className="section-welcome">
                                <div className="section-img">
                                    <picture>
                                        <source srcSet="./img/movie/icon_Player.webp" type="image/webp" />
                                        <source srcSet="./img/movie/icon_Player.png" type="image/png" />
                                        <img src="./img/movie/icon_Player.png" className="sec-img" alt="icon Player" />
                                    </picture>
                                </div>
                                <h3 className="section-text">Movies</h3>
                            </div>

                            <ul className="movie-category">
                                <li className="category-item active"  onClick={() => this.category("movie/top_rated")}>Najwyżej oceniane</li>
                                <li className="category-item " onClick={() => this.category("trending/movie/week")}>Popularne</li> 
                                <li className="category-item"  onClick={() => this.category("movie/upcoming")}>Oczekiwane</li>
                               
                           </ul>
                        </div>
                        <div className="movies-list">
                            <TopRatedList movies={this.state.categoryMovies} />
                        </div>
                    </div>
                  </div>
              </div>
        </>
         );
    }
}
 
export default Movies;