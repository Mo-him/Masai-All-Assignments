import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (email, password) => {
    const data = {
      email,
      password
    }
    fetch('http://localhost:8080/login', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json"
      }
    }).then((res) => res.json())
      .then((res) => {
        if (res.responce == 'error') {
          alert(res.message)
        }
        alert(res.message)
        console.log(res);
      })
      .catch((err) => console.log("error in fetch"))
  }

  
  return (
    <div className="modal">
      <h1>LOGIN</h1>
      <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" /><br /><br />
      <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" /> <br /><br />
      <Button className='button' onClick={() => handleLogin(email, password)} variant="contained">LOGIN</Button> <br /><br />
    </div>
  )
}

export default Login
