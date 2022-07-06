import React from "react";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import {BrowserRouter, Routes, Route, NavLink,Navigate} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <div className="header">
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Login/>}>
 
          </Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
       </Routes>
       </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
