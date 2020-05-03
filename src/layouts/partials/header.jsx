import React, { Component } from 'react';
import Nav from './nav';
import "../../scss/header.scss";


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
            <Nav/>
            <div className="header" id="header">
            </div>
        </header>
         );
    }
}
 
export default Header;