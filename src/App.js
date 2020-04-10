import React from 'react';
import "./scss/reset.scss"
import "./scss/App.scss"
import Header from "./layouts/partials/header.jsx";
import Footer from "./layouts/partials/footer.jsx";
import './scss/App.scss';

import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Main from './pages/main';

function App() {
    return (
        <>
        <div className="app">
        <Router>
        <Header/>
        <Main/>
        <Footer/>
        </Router>
        </div>
        </>
      );
}

export default App;