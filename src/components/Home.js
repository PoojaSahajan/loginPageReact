import React from 'react';
import {useNavigate} from "react-router-dom";
import { getUser,removeUserSession } from '../Utils/common';
import axios from 'axios';

function Home(props) {
    const user=getUser();
    const navigate = useNavigate();
    const handleLogout=()=>{
        removeUserSession();
        navigate("/login")

    }
  return (
    <div>
      welcome {user.name}<br/>
      <input type="button"
      value="logout"
      onClick={handleLogout}/>
    </div>
  )
}

export default Home
