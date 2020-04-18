import React from 'react';
import "./scss/reset.scss";
import "./scss/general.scss";
import "./scss/variables.scss";
import "./scss/components.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./layouts/partials/header.jsx";
import Footer from "./layouts/partials/footer.jsx";

import {BrowserRouter as Router } from "react-router-dom";
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