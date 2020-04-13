import React from 'react';
import "./scss/reset.scss"
import "./scss/App.scss"
import Header from "./layouts/partials/header.jsx";
import Footer from "./layouts/partials/footer.jsx";
import './scss/App.scss';

import {BrowserRouter as Router, Link } from "react-router-dom";
import Main from './pages/main.jsx';

function App() {
    return (
        <>
        <div className="app">
          <Router>
            <Header/>
            <Main/>
          </Router>
          <Footer/>
        </div>
        </>
      );
}

export default App;