import React from 'react';
import SingleMovie from '../details/SingleMovie';
import SimpleSlider from '../Slider/Slider';




const MoviesList = (props) => {
    return ( 
        <div className="movies-list">
            <h2>tutaj będą wyświetlane filmy</h2>
            <SimpleSlider el={props}/>
        </div>
     );
}
 
export default MoviesList;