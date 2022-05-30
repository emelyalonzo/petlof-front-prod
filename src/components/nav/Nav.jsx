import React from "react";
import { Link } from "react-router-dom";
import whiteLogo from "../../images/petLove-Logo-full.svg";
//TODO: importar diferentes logos para distinguir si el usuario ha hecho login o no
import colorLogo from "../../images/petLove-Logo-full.svg";

const Nav = ({
  minimal,
  isPage,
  authToken,
  setShowModal,
  showModal,
  setIsSignUp,
}) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false); 
  };

  let colorLinks = minimal ? "black" : "white";
  const FirstStep = localStorage.getItem("FirstStep");
  const Dashboard = localStorage.getItem("Dashboard");

  return (
    <nav className="isotipo">
      <div className="logo-container">
        <img
          className="logo-isotipo"
          src={minimal ? colorLogo : whiteLogo}
          alt="logo"
        />
      </div>
      
      {isPage && (
        <div className="itemsMenu-container">
        <div className="container-nav">
          <Link to="/about" className="containerNav--item">
            Home
          </Link>
          <Link to="/about" className="containerNav--item">
            About
          </Link>
          {FirstStep && 
            <Link to="/signup" style={{color: colorLinks, fontSize: '20px', textDecoration: 'none', fontWeight: "bold"}}>
              Go Back
            </Link>
          }
          {Dashboard && 
            <Link to="/dashboard" style={{color: colorLinks, fontSize: '20px', textDecoration: 'none', fontWeight: "bold"}}>
              Go Back
            </Link>
          }
        </div>
        </div>
      )}

      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
