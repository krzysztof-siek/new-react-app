import React, { Component } from 'react';
import AppContext from "../components/context";



class Register extends Component {
    state = {  }
    render() { 
        return ( 
            <AppContext.Consumer>
                {(context) => (
                    <div className="base-container" ref={this.props.containerRef}>
                        <div className="auth-header">Register</div>
                        <div className="auth-content">
                            <div className="auth-img">
                                <img src="./img/auth/user.png" />
                            </div>
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="username" >Username</label>
                                    <input type="text" name="username" placeholder='Username' onChange={context.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass">Email</label>
                                    <input type="email" name="email" onChange={context.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" name="pass" onChange={context.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="auth-footer">
                            <button className="btn" type="button" onClick={context.signup}> Register </button>
                        </div>
                        <button onClick={context.signOut}>Wyloguj</button>
                    </div>
                )}
            </AppContext.Consumer>
         );
    }
}
 
export default Register;