import React from "react";

function Login(){

    return (<div>
        <h2>Login</h2>
        <label for="email">Email Address:</label>
        <input type="text" id="email" name="email"  placeholder="enter email"/><br></br>
        <label for="password">Password:</label>
        <input type="text" id="password" name="password" placeholder="enter password"/><br></br>
        <button>Login</button>
      </div>);
}

export default Login;