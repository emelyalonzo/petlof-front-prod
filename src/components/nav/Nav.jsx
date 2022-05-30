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
    setIsSignUp(false); //its false because when clicking we are logging in
  };

  let colorLinks = minimal ? "black" : "white";

  return (
    <nav className="isotipo">
      <div className="logo-container">
        <img
          className="logo-isotipo"
          src={minimal ? colorLogo : whiteLogo}
          alt="logo"
        />
        {/* //TODO: Añadir NavLink para la pagina de about us */}
      </div>

      {isPage && (
        <div className="container-nav">
          <Link to="/" style={{color: colorLinks, fontSize: '20px', textDecoration: 'none', fontWeight: "bold"}}>
            Home
          </Link>
          <Link to="/about" style={{color: colorLinks, fontSize: '20px', textDecoration: 'none', fontWeight: "bold"}}>
            About
          </Link>
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
