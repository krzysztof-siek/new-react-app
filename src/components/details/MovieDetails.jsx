import {withRouter, Link} from "react-router-dom";
import React, { Component } from 'react';
import "./MovieDetails.scss";


class MovieDetails extends Component {
    state = { 
        movieDetails: []
     }

    getMovieDetalis = () => {
        let isMovie = "movie"
        if(this.props.match.url[1] == "F") {
            isMovie = "movie"
        } else {
            isMovie = "tv"
        }
        fetch(`https://api.themoviedb.org/3/${isMovie}/${this.props.match.params.id}?api_key=77731e0cef7708f81c46f924efbac553&language=pl-PL`)   
        .then(response => response.json())
        .then(json => this.setState({ movieDetails: json}))
      }
  
      componentDidMount() {
        this.getMovieDetalis()
      }

    render() { 
        const {title, name, overview, backdrop_path, poster_path, genres, release_date, vote_count, id} = this.state.movieDetails;
        return ( 
            <div className="movie-details">
                <div className="movie-header">
                    <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="movie backdrop"/> 
                </div>
                <div className="movie-infos-item">
                    <div className="item-poster">
                        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt=""/> 
                    </div>
                    <div className="item-infos">
                        <h2 className="title">{title ? title : name}</h2>
                        <h4>{overview}</h4>
                      
                    <Link to={title ? "/Filmy" : "/Seriale"} className='backLink'> Powrót </Link> 
                    </div>
                   
                </div>
                <div className="movie-details-content">
                    <h3>Dupa Dupa Dupa</h3>
                </div>
            </div>
         );
    }
}
 
export default withRouter(MovieDetails);