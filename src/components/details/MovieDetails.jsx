import React from 'react';
import {withRouter, Link} from "react-router-dom";

const MovieDetails = (props) => {
    
    const spec = props.list.filter(
        el => el.id.toString() === props.match.params.id 
      );
     
      
      let dupa = spec.map(el => (
      <div className="mov-deac">

      <h2>{el.title}  </h2>
      <span>{el.id}</span>
      <h4>tutaj będzie coć</h4>
      <h3>{el.rease_date}</h3>
      <h5>{el.vote_average}</h5>
      </div>
      ))


      return ( 
        <>
        {dupa}
        <Link to="/Filmy"> Powrót </Link>
        </>
     );
}
 
export default withRouter(MovieDetails);