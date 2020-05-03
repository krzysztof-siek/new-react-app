import React, { Component } from 'react';
import * as firebase from "firebase/app";
import firebaseConfig from "../config/firebase";
import AppContext from "../components/context";

firebase.initializeApp(firebaseConfig);

class Login extends Component {
    state = { 
        user: "",
        pass:"",
     }

     componentDidMount() {
         this.authListener();
     }

     componentDidUpdate(prevProps, prevState) {
        if(this.state.user !== prevState.user){
            this.props.auth(this.state.user)
        } else {
            console.log('bez zmian')
        }
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
             console.log(u)
         }).catch((err) => {
             console.log(err)
         })
     }

     signup = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
     }

     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     

    render() { 
       
        return ( 
             <AppContext.Consumer>
                {(context) => (
                    
                    <div className="main">
                <form>
                    <input type="email" placeholder="Email" id="email" name="email" onChange={this.handleChange} value={this.state.email}/>
                    <input type="password" placeholder="Pass" id="pass" name="pass" onChange={this.handleChange} value={this.state.pass}/>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}>SignUp</button>
                    <button onClick={() => firebase.auth().signOut()}>Wyloguj</button>

                </form>
                <h4>Welcome : {this.state.user ? this.state.user.email : "GOŚĆ"}</h4>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4>email : {this.state.email}</h4>
                <h4>pass : {this.state.pass}</h4>
                <button onClick={() => context.test(this.state.user)}>Test</button>

            </div>
            )}
         </AppContext.Consumer>  
         );
    }
}
 
export default Login;