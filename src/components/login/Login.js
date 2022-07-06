import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios, { Axios } from 'axios';
import { setUserSession,setToken } from '../../Utils/common';
import './Login.css';
import {login,fetchUserData} from '../../API/Api.js';
import LoginView from './LoginView';

function Login(props) {

    const navigate = useNavigate();
    const goToHome=()=>{
        navigate("/home")
    }

    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const handleLogin=()=>{
        setError(null);
        setLoading(true);
                             
        var regex = /(?=.*[0-9]{3,})(?=.{8,})/;
        setError("");
        if(username.length==0){
          setError("Username cannot be empty");
        }
        else if(password.length>8 && regex.test(password)){
            login(username,password).then(response=>{
            setLoading(false);
            setToken(response.token);
            fetchUserData(response.token).then(response=>
              {
                setUserSession(response);
                goToHome();
              }
            )
           }).catch(error=>{
                  setLoading(false);
                  if(error.response.status===401 || error.response.status===400){
                    console.log(error.response.data.non_field_errors[0]);
                    setError(error.response.data.non_field_errors[0] || "something went wrong")
                  }
                  else{
                    setError("Something went wrong. Please try again");
                  }
            });
          }
           else{setError("Password should have more than 8 charecters and have a number");}
          setLoading(false);

               
    }  
  return (
    <LoginView username={username} password={password} 
    setUsername={setUsername} setPassword={setPassword}
    error={error} loading={loading} handleLogin={handleLogin} />
  )
}

export default Login
