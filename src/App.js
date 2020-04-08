import React from 'react';
import "./scss/reset.scss"
import Header from "./layouts/partials/header.jsx";
import Main from "./pages/main.jsx";
import Footer from "./layouts/partials/footer.jsx";
import './scss/App.scss';

function App() {
    return (
        <>
        <Header/>
        <Main/>
        <Footer/>
       
        </>
      );
}

export default App;