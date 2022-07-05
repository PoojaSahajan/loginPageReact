import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { setUserSession } from '../Utils/common';
import './Login.css';

function Login(props) {
    const navigate = useNavigate();

    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    
    // const navigate = useNavigate();
    const handleLogin=()=>{
        setError(null);
        setLoading(true);
        
        axios.post("http://localhost:4000/users/signin",{
            username:username,
            password: password
        }).then(response=>{
          var regex = /^[0-9]+/;
          if(password.length>8 && regex.test(password)){
            console.log('response>>>',response);
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            setError(response.data.token);
           // navigate("/");
          }
          else{setError("Password should have more than 8 charecters and have a number");}
        }).catch(error=>{
             setLoading(false);
             if(error.response.status===401 || error.response.status===400){
                setError(error.response.data.message);
             }
             else{
                setError("Something went wrong. Please try again");
             }
        });
    }
  return (
    <div className='page'>
      
     <h1> <center>Login pg  </center></h1> <br/><br/>
     <div  className='form'>
      <form className='formInput'>
      <div>
        Username<br/>
        <input type="text"
        value={username}
        onChange={e=>setUsername(e.target.value)}/>
      </div>
      <div>
        Password<br/>
        <input type="password"
        value={password}
        onChange={e=>setPassword(e.target.value)}/>
      </div>
      {error && <div className='error'>{error}</div>}
      {!error && <div> {error}</div>}
      <br/>
      <input type="button" 
      value={loading? "LOADING" : "Login"} 
      disabled={loading}
      onClick={handleLogin}/>
      </form>
      </div>
    </div>
  )
}

export default Login
