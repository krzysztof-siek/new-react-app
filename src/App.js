import React from 'react';
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




function App() {
    return (
        <>
        <div className="app">
          <Router>
            <Header/>
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
                    <Route path="/Film/:id">
                        <MovieDetails />
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
        </>
      );
}

export default App;