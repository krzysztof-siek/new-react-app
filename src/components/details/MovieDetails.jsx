import React from 'react';
import {withRouter, Link} from "react-router-dom";

const MovieDetails = (props) => {
    const spec = props.list.filter(
        el => el.name === props.match.params.id
      );

      console.log(spec)
    return ( 
        <>
        <h1>{spec[0].name}</h1>
        <h2>{spec[0].username}</h2>
        <h2>{spec[0].email}</h2>
        <h2>{spec[0].address.city}</h2>
        <h2>{spec[0].address.street}</h2>
        <Link to="/Filmy"> Powrót </Link>
        </>
     );
}
 
export default withRouter(MovieDetails);