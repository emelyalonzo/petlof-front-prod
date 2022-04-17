import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home/Home";
import Signin from "./pages/SignIn/SignIn";
import Signup from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
