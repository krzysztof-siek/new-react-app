import React, { Component } from 'react';
import Nav from './nav';
import "../../scss/header.scss";


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
      
            <Nav  user={this.props.user}/>
            <div className="header" id="header">
        <h2>Witaj {this.props.user ? this.props.user : "gość"}</h2>
            </div>
        </header>
         );
    }
}
 
export default Header;