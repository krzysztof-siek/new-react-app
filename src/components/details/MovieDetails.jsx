import React from 'react';
import {withRouter, Link} from "react-router-dom";

const MovieDetails = (props) => {
    
    const spec = props.list.filter(
        el => el.id.toString() === props.match.params.id 
      );
      // console.log(props.list.map(el => el.id))
      // console.log(props.match.params.id *1)
      // console.log(spec[0].popularity);
      let title = spec.map(el => el.title)
      let id = spec.map(el => el.id)
      
      return ( 
        <>
        <h2>{title}</h2>
        <h2>{id}</h2>
        {/* <h1>{spec[0].title}</h1> */}
        {/* <h2>{spec[0].overview}</h2>
        <h2>{spec[0].relase_date}</h2>
        <h2>{spec[0].poster_path}</h2>
        <h2>{spec[0].vote_average}</h2> */}
        <Link to="/Filmy"> Powrót </Link>
        </>
     );
}
 
export default withRouter(MovieDetails);