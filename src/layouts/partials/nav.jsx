import React from 'react';
import '../../scss/variables.scss';
import '../../scss/nav.scss';
import {Link } from "react-router-dom";


function nav() {
return (
<nav>
    <div className="container">
        <div className="nav">
            <div className="nav-brand">
                <picture>
                    <source srcset="./img/general/logo.webp" type="image/webp" />
                    <source srcset="./img/general/logo.png" type="image/png" />
                    <img src="./img/general/logo.png" class="logo-img" alt="Logo icon" />
                </picture>
            </div>
            <div className="nav-links">
                <li className="nav-item">
                    <Link to="/Filmy" className="nav-link">Film</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Seriale" className="nav-link">Serial</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Top" className="nav-link">Top Imgb</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Zaloguj" className="nav-link">Zarejestruj / Zaloguj</Link>
                </li>
                
            </div>
        </div>
    </div>
</nav>
);
}

export default nav;