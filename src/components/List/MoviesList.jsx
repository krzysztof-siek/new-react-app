import React from 'react';

import SimpleSlider from '../Slider/Slider';




const MoviesList = (props) => {
    return ( 
        <div className="movies-list">
            <SimpleSlider el={props}/>
        </div>
     );
}
 
export default MoviesList;