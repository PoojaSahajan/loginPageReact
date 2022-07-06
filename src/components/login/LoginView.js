import React from 'react';
import './Login.css';
import logo from '../../logo/analyticsValleyPic.png';

function LoginView(props) {
  return (
    <div className='page'>
      <center><img src={logo}></img></center>
    
    <div  className='form'>
    <h2> <center>Login Project</center></h2> 
     <form className='formInput'>
     <div>
       Username<br/>
       <input type="text"
       value={props.username}
       onChange={e=>props.setUsername(e.target.value)}/>
     </div>
     <div>
        <br/>
       Password<br/>
       <input type="password"
       value={props.password}
       onChange={e=>props.setPassword(e.target.value)}/>
     </div>
     
     <div className='error'>{props.error}</div>
      
     <br/>
     <center>
     <input type="button" 
     value={props.loading? "LOADING" : "LOGIN"} 
     disabled={props.loading}
     onClick={props.handleLogin}
     className='button'/>
     </center>
     </form>
     </div>
     
   </div>
  )
}

export default LoginView
