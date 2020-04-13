import React from 'react';
import SingleMovie from '../details/SingleMovie';




const MoviesList = (props) => {
    return ( 
        props.list.map(el => <SingleMovie el={el} />)
     );
}
 
export default MoviesList;