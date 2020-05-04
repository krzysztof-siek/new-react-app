import React, { Component } from 'react';
import AppContext from "../components/context";




class Auth extends Component {
state = {
rightActive: true,
}

changeRightActive = () => {
this.setState({rightActive: !this.state.rightActive})
}

render() {
return (
<AppContext.Consumer>
    {(context) => (
    <>
        <div className="auth">
            <div class={this.state.rightActive ? "container" : "container right-panel-active" } id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" name="username" onChange={context.handleChange} />
                        <input type="email" placeholder="Email" name="email" onChange={context.handleChange} />
                        <input type="password" placeholder="Password" name="pass" onChange={context.handleChange} />
                        <button onClick={context.signup}>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name="email" onChange={context.handleChange} />
                        <input type="password" placeholder="Password" name="pass" onChange={context.handleChange} />
                        <a href="#">Forgot your password?</a>
                        <button onClick={context.login}>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="ghost" id="signIn" onClick={this.changeRightActive}>Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost" id="signUp" onClick={this.changeRightActive}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
    )}
</AppContext.Consumer>
);
}
}

export default Auth;