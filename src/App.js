import React, { Component } from 'react';
import "./scss/App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layouts/partials/header";
import Footer from "./layouts/partials/footer.jsx";
import Movies from './pages/Movies';
import Serials from './pages/Serials';
import Top from './pages/Top';
import MovieDetails from './components/details/MovieDetails';
import Login from "./pages/Login";
import AppContext from "./components/context";


class App extends Component {
    state = { 
        user:""
     }


    auth = (user) => {
        if(user) {
            this.setState({user: user.email})
        }else {
            return;
        }
    }

    

    

    render() { 

        const contextElements = {
            test: this.test
        }

        return ( 
            <div className="app">
          <Router>
              <AppContext.Provider value={contextElements}>
                <Header user={this.state.user}/>
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
                        <Login auth={this.auth}/>
                    </Route>
                    <Route path="/Film/:id">
                        <MovieDetails />
                    </Route>
                </Switch>
                </AppContext.Provider>
                <Footer/>
            </Router>
        </div>
         );
    }
}
 
export default App;



