import Login from "./Login";
import Register from "./Register";


import React from 'react';

const Auth = (props) => {
    return ( 
        <>
        {props.user ? <Register /> : <Login />}
    <h4>zalogowany? {props.user ? props.user.email : "gość"}</h4>
        </>
     );
}



 
export default Auth;