import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import { getIsLoggedIn, getUser,removeUserSession } from '../../Utils/common';
import axios from 'axios';
import HomeView from './HomeView';
import LoggedOutView from './LoggedOutView';

function Home(props) {
    const user=getUser();
    const isLoggedIn=getIsLoggedIn();
    console.log(`isLOggedIn: ${isLoggedIn}`);
    const navigate = useNavigate();
    const handleLogout=()=>{
        removeUserSession()
        navigate("/login")

    }


  return (
    <div>
      {
      isLoggedIn
      ?(<HomeView user={user} handleLogout={handleLogout}/>)
      :(<LoggedOutView handleLogout={handleLogout} />)}
    </div>
 
  )
}

export default Home
