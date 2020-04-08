import React from 'react';
import '../../scss/nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function nav() {
    return (
        <>
       <nav>
           <div className="nav">
                <div className="nav-brand">
                    logo
                </div>
                <div className="nav-links">
                    <li className="nav-item"><a href="#" className="nat-link">Film</a></li>
                    <li className="nav-item"><a href="#" className="nat-link">Serial</a></li>
                    <li className="nav-item"><a href="#" className="nat-link">Top Imgb</a></li>
                    <li className="nav-item"><a href="#" className="nat-link">Zarejestruj / Zaloguj</a></li>
                </div>
                <div className="nav-button">
                    <h4>button</h4>
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
           </div>
       </nav>
        </>
      );
}

export default nav;