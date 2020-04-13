import React from 'react';
import {Link} from "react-router-dom";

const SingleMovie = (props) => {
    return ( 
        <Link to={`/Film/${props.el.name}`}>
        <div className="movie">
            <h2>{props.el.name}</h2>
            <h3>{props.el.username}</h3>
            {props.el.email}
        </div>
        </Link>

     );
}
 
export default SingleMovie;