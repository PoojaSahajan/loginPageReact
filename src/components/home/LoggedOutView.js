import React from 'react';
import './Home.css'

function LoggedOutView(props) {
  return (
    <div>
        <center>
            Sorry, you seem to be logged out, please login again!! 
            <br/><br/>
            <input type="button" className='button' onClick={props.handleLogout} value='LOGIN' /> 
        </center>
         
    </div>
  )
}

export default LoggedOutView
