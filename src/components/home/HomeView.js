import React from 'react';
import './Home.css'

function HomeView(props) {
  return (
    <center>
      <h2>Welcome {props.user.username} </h2>
     <b> email: {props.user.email}<br/>
      Date Joined: {props.user.date_joined}<br/><br/>
      </b>
      <input type="button"
      value="LOGOUT"
      onClick={props.handleLogout}
      className='button'/>
    </center>
  )
}

export default HomeView
