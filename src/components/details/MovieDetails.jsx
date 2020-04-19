import {withRouter, Link} from "react-router-dom";
import React, { Component } from 'react';
import "./MovieDetails.scss";


class MovieDetails extends Component {
    state = { 
        movieDetails: []
     }

    getMovieDetalis = () => {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=77731e0cef7708f81c46f924efbac553&language=en-US`)

  
    .then(response => response.json())
    .then(json => this.setState({ movieDetails: json}))
      }
  
      componentDidMount() {
        this.getMovieDetalis()
      }

    render() { 
        const {title, overview} = this.state.movieDetails;
        return ( 
           
            <div className="movie-details">
                <h3>{title}</h3>
                <h3>{overview}</h3>
                <Link to="/Filmy"> Powrót </Link>
            </div>
         );
    }
}
 
export default withRouter(MovieDetails);