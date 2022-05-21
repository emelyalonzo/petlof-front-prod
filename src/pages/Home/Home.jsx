import React from "react";
<<<<<<< HEAD
import Nav from "../../components/nav/Nav";
import logo from './img/petLove-Logo.png';
=======
import Authmodal from "../../components/AuthModal/AuthModal"
import { useState } from "react";
import Nav from '../../components/Nav/Nav';
>>>>>>> master

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      <Nav minimal={false} 
           authToken={authToken} 
           setShowModal={setShowModal} 
           showModal={showModal}
           setIsSignUp={setIsSignUp}
           />
      <div className="home">
<<<<<<< HEAD
        <div className="div-container--title">
        <img className="img-logo" src={logo} alt="Logo" />
        {/* <img src="./img/petLove-Logo.png'"/> */}
          <h1 className="title-h1">Pet <span className="boldLove">Love</span><span className="copyRightSpan">®</span></h1>
          <div className="div-container--buttons">
          <button className="primary-button" onClick={handleClick}>
            {authToken ? "Signout" : "Create Account"}
          </button>
          <button className="primary-button" onClick={handleClick}>
            {authToken ? "Signout" : "Create Account"}
          </button>
          </div>
        </div>
=======
        <h1 className="primary-title">Swipe Right®</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && (
          <Authmodal  
            setShowModal={setShowModal}
          />
        )}
>>>>>>> master
      </div>
    </ div>
  );
};

export default Home;
