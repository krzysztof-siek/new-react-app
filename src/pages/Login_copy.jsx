import React, { Component } from 'react';
import AppContext from "../components/context";




const Login = () => {
return (
<AppContext.Consumer>
    {(context) => (

    <div className="login">
            <form className="login-form">
                <h4 className="title">Login</h4>
                <input className="input input-email" type="email" placeholder="Email" id="email" name="email" onChange={context.handleChange}
                    value={context.email} />
                <input className="input input-pass" type="password" placeholder="Pass" id="pass" name="pass" onChange={context.handleChange}
                    value={context.pass} />
                <button onClick={context.login}>Login</button>
                <button onClick={context.signup}>SignUp</button>
                <button onClick={context.signOut}>Wyloguj</button>
            </form>
        </div>


    )}
</AppContext.Consumer>
);
}

export default Login;




{/* <h4>Welcome : {context.user ? context.user.email : "GOŚĆ"}</h4>
<br></br>
<br></br>
<br></br>
<br></br>
<h4>email : {context.email}</h4>
<h4>pass : {context.pass}</h4> */}