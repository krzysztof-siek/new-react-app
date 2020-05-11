import {withRouter, Link} from "react-router-dom";
import React, { Component } from 'react';
import "./MovieDetails.scss";


class MovieDetails extends Component {
    state = { 
        movieDetails: []
     }

    getMovieDetalis = () => {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=77731e0cef7708f81c46f924efbac553&language=pl-PL`)

  
    .then(response => response.json())
    .then(json => this.setState({ movieDetails: json}))
      }
  
      componentDidMount() {
        this.getMovieDetalis()
      }

    render() { 
        const {title, overview, backdrop_path, poster_path} = this.state.movieDetails;
        console.log(this.state.movieDetails)
        return ( 
            <div className="movie-details">
                <div className="movie-header">
                    <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="movie backdrop"/> 
                </div>
                <div className="movie-infos-item">
                    
                    {/* <h3>{title}</h3>
                    <h3>{overview}</h3>
                    <Link to="/Filmy"> Powrót </Link> */}
                </div>
            </div>
         );
    }
}
 
export default withRouter(MovieDetails);