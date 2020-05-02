import React from 'react';
import SingleMovie from "./SingleMovie";

const TopRatedList = (props) => {
  
    return ( 
        <div className="topRatedList">
            {props.movies.map(el => <SingleMovie key={el.id} movie={el}/>)}
        </div>
     );
}
 
export default TopRatedList;