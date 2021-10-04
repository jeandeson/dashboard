import React from 'react';
import './login.css'
import {useHistory} from 'react-router-dom'


const Login = () => {


  const history = useHistory()

  const handleLogin = () => {
    history.push(`/`)
    console.log(history)
  }
  return ( 
    <div>
      <form>
        <div className="box">
          <h1>Dashboard</h1>
          <input className="email" />
          <input className="password" />
          <div className="button-container">
            <button onClick={handleLogin} className="btn">Signin</button>
            <button className="btn">Signup</button>
          </div>
        </div>
      </form>
      <p>Click Here!</p>
    </div>
   );
}
 
export default Login;