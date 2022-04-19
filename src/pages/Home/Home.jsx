import React from "react";

import Nav from "../../components/nav/Nav";

const Home = () => {

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Nav />
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
      </div>
    </>
  );
};

export default Home;
