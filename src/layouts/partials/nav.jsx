import React from 'react';
import '../../scss/nav.scss';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function nav() {
    return (
        <>
       <nav>
           <div className="nav">
                <div className="nav-links">
                    <li className="nav-item"><Link to="/Filmy" className="nav-link">Film</Link></li>
                    <li className="nav-item"><Link to="/Seriale" className="nav-link">Serial</Link></li>
                    <li className="nav-item"><Link to="/Top" className="nav-link">Top Imgb</Link></li>
                    <li className="nav-item"><Link to="/Zaloguj" className="nav-link">Zarejestruj / Zaloguj</Link></li>
                    
                </div>
               
           </div>
       </nav>
        </>
      );
}

export default nav;