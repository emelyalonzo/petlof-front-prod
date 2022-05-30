import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home/Home";
import Signup from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* Redirigir a home si no está loggeado  */}
        <Route exact path='/' element={<PrivateRoute/>}> 
          {/* /user/signup */}
          <Route path="/signup" element={<Signup/>}/> 
          {/* /user/dashboard */}
          <Route path="/dashboard" element={<Dashboard/>}/> 
        </Route>
      </Routes>
    </Router> 
  );
}

export default App;
