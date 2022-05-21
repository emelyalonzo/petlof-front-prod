import React from "react";
import Nav from "../../components/nav/Nav";
import logo from './img/petLove-Logo.png';

const Home = () => {

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Nav />
      <div className="home">
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
      </div>
    </>
  );
};

export default Home;
