import React, { Component } from 'react';
import * as firebase from "firebase/app";
import firebaseConfig from "../config/firebase";

firebase.initializeApp(firebaseConfig);

class Login extends Component {
    state = { 
        user: "",
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
            <>
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
            </div>
            </>
         );
    }
}
 
export default Login;