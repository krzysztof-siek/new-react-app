import React, { Component } from 'react';
import AppContext from "../components/context";


class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <AppContext.Consumer>
                {(context) => (
                    <div className="base-container" ref={this.props.containerRef}>
                        <div className="auth-header">Login</div>
                        <div className="auth-content">
                            <div className="auth-img">
                                <img src="./img/auth/user.png" />
                            </div>
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="username">Email</label>
                                    <input type="text" name="email" placeholder='Username' onChange={context.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" name="pass" placeholder="Password" onChange={context.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="auth-footer">
                            <button className="btn" type="button" onClick={context.login}> Login </button>
                        </div>
                    </div>
                )}
            </AppContext.Consumer>
         );
    }
}
 
export default Login;