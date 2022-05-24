import React from 'react';
import whiteLogo from "../../images/petLove-Logo-full.svg";
import colorLogo from "../../images/petLove-Logo-full.svg";

const Nav = ({minimal, authToken, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false); //its false because when clicking we are logging in
    }

    return (
        <nav className='isotipo'>
            {/* Homepage UI TODO */}
        <div className="logo-container">
        <img
          className="logo-isotipo"
          src={minimal ? colorLogo : whiteLogo}
          alt="logo"
        />
        {/* //TODO: Añadir NavLink para la pagina de about us */}
      </div>
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
}

export default Nav;
