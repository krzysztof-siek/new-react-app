import React, { Component } from 'react';
import SimpleSlider from '../components/Slider/Slider';
import "../scss/pages/Movies.scss";

import TopRatedList from "../components/movie/TopRatedList";

const categoryLinkArray = ["movie/top_rated", "trending/movie/week", "movie/upcoming"];
const categoryTitleArray = ["Najwyżej oceniane filmy", "Popularne w tym tygodniu", "Oczekiwane"];
const APIKey= "api_key=77731e0cef7708f81c46f924efbac553";

class Movies extends Component {
    state = { 
        mostPopular: [],
        categoryMovies: [],
        choosedCategory: "trending/movie/week",
        activeCategory: 1,
        isMovie: true
     }


    fetchPopularMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?${APIKey}&language=pl-PL&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
        .then(response => response.json())
        .then(json => this.setState({ mostPopular: json.results}))
    }

    fetchCategoryMovies = () => {
        fetch(`https://api.themoviedb.org/3/${this.state.choosedCategory}?${APIKey}&language=pl-PL&page=1`)
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
             choosedCategory: categoryLinkArray[props],
             activeCategory: props
         })   
      }


    render() { 
        const {mostPopular,activeCategory, categoryMovies} = this.state;
        return ( 
            <>
              <div className="movies">
                  <div className="movies-header">
                  <SimpleSlider moviesList={mostPopular}/>
                  </div>
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
                                <h3 className="section-text">{categoryTitleArray[activeCategory]}</h3>
                            </div>

                            <ul className="movie-category">
                                <li className={activeCategory == 0 ? "category-item active" : "category-item"}  onClick={() => this.category(0)}>Najwyżej oceniane</li>
                                <li className={activeCategory == 1 ?  "category-item active" : "category-item"} onClick={() => this.category(1)}>Popularne</li> 
                                <li className={activeCategory  == 2 ?  "category-item active" : "category-item"}  onClick={() => this.category(2)}>Oczekiwane</li>
                               
                           </ul>
                        </div>
                        <div className="movies-list">
                            <TopRatedList movies={categoryMovies} isMovie={this.state.isMovie}/>
                        </div>
                    </div>
                  </div>
              </div>
        </>
         );
    }
}
 
export default Movies;