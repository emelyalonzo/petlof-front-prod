import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home/Home";
import Signup from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";

const App = () => {

  const authToken = localStorage.getItem('AuthToken');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* Redirigir a home si no está loggeado  */}
        {authToken && <Route path="/signup" element={<Signup/>}/>}
        {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
      </Routes>
    </Router>
  );
}

export default App;
