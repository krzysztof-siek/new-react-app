import React, { Component } from 'react';
import "./scss/App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./layouts/partials/header";
import Footer from "./layouts/partials/footer.jsx";
import Movies from './pages/Movies';
import Serials from './pages/Serials';
import Top from './pages/Top';
import MovieDetails from './components/details/MovieDetails';
import Auth from "./auth/Auth";
import AppContext from "./components/context";
import * as firebase from "firebase/app";
import firebaseConfig from "./config/firebase";


firebase.initializeApp(firebaseConfig);

class App extends Component {
    state = { 
        user:"",
        email:"",
        pass:"",
     }

   

    
    componentDidMount() {
        this.authListener();
    }


    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({user})
            }else {
                this.setState({user:null})
            }
        })
    }

   

    login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).then((u) => {
            this.setState({user:u})
           
        }).catch((err) => {
            console.log(err)
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

    signup = (e) => {
       e.preventDefault();
       firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).then((u) => {
       }).catch((err) => {
           console.log(err)
       })
    }

    signOut = () => {
        firebase.auth().signOut()
    }
   

    render() { 

        const contextElements = {
            user: this.state.user,
            email: this.state.email,
            pass: this.state.pass,
            signup: this.signup,
            handleChange: this.handleChange,
            login: this.login,
            signOut: this.signOut,
        }

        

        return ( 
            <div className="app">
          <Router>
              <AppContext.Provider value={contextElements}>
                <Header user={this.state.user} signOut={this.signOut}/>
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
                        <Auth  />
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



