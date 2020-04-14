import React from 'react';
import {Link} from "react-router-dom";

const SingleMovie = (props) => {
    return ( 
        <Link to={`/Film/${props.el.id}`}>
        <div className="movie">
            <h2>{props.el.title}</h2>
            <h3>{props.el.overview}</h3>
            {props.el.relase_date}
        </div>
        </Link>

     );
}
 
export default SingleMovie;