import React, { Component } from 'react';
import SimpleSlider from '../components/Slider/Slider';
import "../scss/pages/Movies.scss";

import {NavLink} from "react-router-dom";
import TopRatedList from "../components/movie/TopRatedList";
class Movies extends Component {
    state = { 
        mostPopular: [],
        topRated: []
     }

    fetchPopularMovies = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=77731e0cef7708f81c46f924efbac553&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
  
    .then(response => response.json())
    .then(json => this.setState({ mostPopular: json.results}))
      }

    fetchTopRatedMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=77731e0cef7708f81c46f924efbac553&language=en-US&page=1')
        .then(response => response.json())
        .then(json => this.setState({topRated: json.results}))
    }
  
      componentDidMount() {
        this.fetchPopularMovies()
        this.fetchTopRatedMovies()
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
                                <h3 className="section-text">Top Movies</h3>
                            </div>
                            {/* TUTAJ DAĆ ROUTE I NAV LINKI I W ZALEŻNOŚCI OD KLIKNIĘTEGO LINKA BĘDZIE SIĘ ODPOWIEDNIA ZAWARTOŚĆ WYŚWIETLAŁA!!  */}
                            <ul className="movie-category">
                                <li className="category-item active"> <NavLink to='/Film/Latest'>Ostatnio dodane</NavLink></li> 
                                <li className="category-item"> <NavLink to="/Film/Comming-soon">Oczekiwane</NavLink></li>
                                <li className="category-item"><NavLink to='Flim/Top-rated'> Najwyżej oceniane </NavLink></li>
                               
                           </ul>
                        </div>
                        <div className="movies-list">
                            <TopRatedList topRated={this.state.topRated} />
                        </div>
                    </div>
                  </div>
              </div>
        </>
         );
    }
}
 
export default Movies;