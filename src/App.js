import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import {BrowserRouter, Routes, Route, NavLink,Navigate} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <div className="header">
<NavLink exact activeClassName="active" to="/">Home</NavLink>
<NavLink activeClassName="active" to="/login">Login</NavLink>
     </div>
     <div className="content">
<Routes>
  <Route exact path="/" element={<Home/>}>
  <Navigate to="/login" />
  </Route>
  <Route exact path="/login" element={<Login/>}></Route>
</Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
