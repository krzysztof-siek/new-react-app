import React from 'react';
import '../scss/main.scss';
import Serials from './Serials';
import Movies from './Movies';
import Top from './Top';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"



const Main = () => {
    return ( 
        <div className="main">
        <Switch>
          <Route path="/Filmy">
            <Movies />
          </Route>
          <Route path="/Seriale">
            <Serials />
          </Route>
          <Route path="/Top">
            <Top />
          </Route>
          <Route path="/Zaloguj">
            <Login />
          </Route>
        </Switch>
        </div>
     );
}
 
export default Main;