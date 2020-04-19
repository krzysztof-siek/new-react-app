import React, { Component } from 'react';
import SimpleSlider from '../components/Slider/Slider';

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
            <div className="movies-list">
            <SimpleSlider moviesList={this.state.moviesList}/>
        </div>
        </>
         );
    }
}
 
export default Movies;