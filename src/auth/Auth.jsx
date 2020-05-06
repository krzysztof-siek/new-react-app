import React, { Component } from 'react';
import AppContext from "../components/context";
import {Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';





class Auth extends Component {
state = {
rightActive: true,
}

componentDidUpdate(prevProps, prevState) {
           if(this.props.user !== prevState.user){
            this.setState({user: this.props.user})
           } 
       }

   
       componentDidMount = () => {
           this.setState({user:this.props.user})
       }
       

changeRightActive = () => {
this.setState({rightActive: !this.state.rightActive})
}



render() {
return (
<AppContext.Consumer>
    {(context) => (
    <>
        {!this.state.user ? (<div className="auth">
            <div class={this.state.rightActive ? "container" : "container right-panel-active" } id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="social">
                                <FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" class="social">
                                <FontAwesomeIcon icon={faGooglePlusG} /></a>
                            <a href="#" class="social">
                                <FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" name="username" onChange={context.handleChange} />
                        <input type="email" placeholder="Email" name="email" onChange={context.handleChange} />
                        <input type="password" placeholder="Password" name="pass" onChange={context.handleChange} />
                        <button onClick={context.signup}>Zarejestruj</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Logowanie</h1>
                        <div class="social-container">
                            <a href="#" class="social">
                                <FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" class="social">
                                <FontAwesomeIcon icon={faGooglePlusG} /></a>
                            <a href="#" class="social">
                                <FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name="email" onChange={context.handleChange} />
                        <input type="password" placeholder="Password" name="pass" onChange={context.handleChange} />
                        <a href="#">Zapomniałeś hasła? <span className="strong">Kliknij</span> </a>
                        <button onClick={context.login}>Zaloguj</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Witaj ponownie!</h1>
                            <p>Proszę zaloguj się aby w pełni korzystać z serwisu.</p>
                            <button class="ghost" id="signIn" onClick={this.changeRightActive}>Logowanie</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Nie masz konta?</h1>
                            <p>Zarejestruj się i zacznij z nami przygpdę .</p>
                            <button class="ghost" id="signUp" onClick={this.changeRightActive}>Rejestracja</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>) :
        <Redirect to="/Filmy" />}
    </>
    )}
</AppContext.Consumer>
);
}
}

export default Auth;