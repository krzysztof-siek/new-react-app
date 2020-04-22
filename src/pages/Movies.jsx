import React, { Component } from 'react';
import SimpleSlider from '../components/Slider/Slider';
import "../scss/pages/Movies.scss";

import {NavLink} from "react-router-dom";

class Movies extends Component {
    state = { 
        moviesList: []
     }

    fetchData = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=77731e0cef7708f81c46f924efbac553&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
  
    .then(response => response.json())
    .then(json => this.setState({ moviesList: json.results}))
      }
  
      componentDidMount() {
        this.fetchData()
      }

    render() { 
        return ( 
            <>
              <div className="movies">
                  <SimpleSlider moviesList={this.state.moviesList}/>
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
                                <h3 className="section-text">Movie Grid</h3>
                            </div>
                            {/* TUTAJ DAĆ ROUTE I NAV LINKI I W ZALEŻNOŚCI OD KLIKNIĘTEGO LINKA BĘDZIE SIĘ ODPOWIEDNIA ZAWARTOŚĆ WYŚWIETLAŁA!!  */}
                            <ul className="movie-category">
                                <li className="category-item active"> <NavLink to='/Film/Latest'>Ostatnio dodane</NavLink></li> 
                                <li className="category-item"> <NavLink to="/Film/Comming-soon">Oczekiwane</NavLink></li>
                                <li className="category-item"><NavLink to='Flim/Top-rated'> Najwyżej oceniane </NavLink></li>
                               
                           </ul>
                        </div>
                        <div className="movies-list">
                            <h3>tutaj będzie react router</h3>
                        </div>
                    </div>
                  </div>
              </div>
        </>
         );
    }
}
 
export default Movies;