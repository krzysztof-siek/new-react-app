import React from 'react';
import Nav from './nav';
import "../../scss/header.scss";

function Header() {
return (
<>
    <header>
        <div className="bgc">
            <div className="header-bg">
                <img src="/img/temporary/2.jpg" alt="main header background" className="main-bgc"/>
            </div>
        </div>
        <Nav />
        <div className="header">
            tutaj będzie slider
        </div>
    </header>
</>
);
}

export default Header;