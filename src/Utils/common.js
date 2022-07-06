export const getUser=()=>{
    const userStr=sessionStorage.getItem("user");
    console.log(`userdata ${userStr}`);
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken=()=>{
    return sessionStorage.getItem("token") || null;
}

export const setUserSession=(user)=>{    
    sessionStorage.setItem("user",JSON.stringify(user));
}

export const removeUserSession=()=>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.setItem("isLoggedIn","false");
}

export const setToken=(token)=>{
    sessionStorage.setItem("token",token);
    sessionStorage.setItem("isLoggedIn","true");
}

export const getIsLoggedIn=()=>{

    return sessionStorage.getItem("isLoggedIn") && sessionStorage.getItem("isLoggedIn") == "true" ;    
}