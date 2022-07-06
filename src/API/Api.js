import React from 'react';
import axios from 'axios';


export async function login(username,password){
    
    try{
        const response= await axios.post("http://analyticsv.pythonanywhere.com/user/login",{
                username:username,
                password: password
            })
            console.log(response);
            return response.data;
    }catch(error){
        throw error;
    }
}

export async function fetchUserData(token){
    
    try{
        const authAxios=axios.create({
            baseURL: "http://analyticsv.pythonanywhere.com/user/login",
            headers: {
              Authorization: `Token ${token}`
            }
          });
        const response= await authAxios.get("http://analyticsv.pythonanywhere.com/user/");
            console.log(response);
            return response.data;
    }catch(error){
        throw error;
    }
}




