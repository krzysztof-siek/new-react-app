import React from 'react';
import '../../scss/variables.scss';
import '../../scss/nav.scss';
import { NavLink } from "react-router-dom";
import firebaseConfig from "../../config/firebase";
import * as firebase from "firebase/app";




function nav(props) {
return (
<nav>
    <div className="container">
        <div className="nav">
            <div className="nav-brand">
                <picture>
                    <source srcSet="./img/general/logo.webp" type="image/webp" />
                    <source srcSet="./img/general/logo.png" type="image/png" />
                    <img src="./img/general/logo.png" className="logo-img" alt="Logo icon" />
                </picture>
            </div>
            <div className="nav-links">
                <li className="nav-item">
                    <NavLink to="/Filmy" className="nav-link">Film</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Seriale" className="nav-link">Serial</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Top" className="nav-link">Top Imgb</NavLink>
                </li>
                <li className="nav-item">
                    {props.user ? (<div>{props.user} </div>) : (<NavLink to="/Zaloguj" className="nav-link">Zarejestruj / Zaloguj</NavLink>)}
                </li>
            </div> 
            <div className="nav-button">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    </div>
</nav>
);
}

export default nav;