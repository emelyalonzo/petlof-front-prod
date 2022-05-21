import React from "react";
import Authmodal from "../../components/AuthModal/AuthModal"
import { useState } from "react";
import Nav from '../../components/Nav/Nav';

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
        <h1 className="primary-title">Swipe Right®</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && (
          <Authmodal  
            setShowModal={setShowModal}
          />
        )}
      </div>
    </ div>
  );
};

export default Home;
