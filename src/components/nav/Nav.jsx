import React from 'react';
import whiteLogo from "../../images/petLove-Logo-full.svg"; 
//TODO: importar diferentes logos para distinguir si el usuario ha hecho login o no
import colorLogo from "../../images/petLove-Logo-full.svg";

const Nav = ({minimal, isPage,  authToken, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false); //its false because when clicking we are logging in
    }

    return (
        <nav className='isotipo'>
            <div className="logo-container">
                <img
                className="logo-isotipo"
                src={minimal ? colorLogo : whiteLogo}
                alt="logo"
                />
                {/* //TODO: Añadir NavLink para la pagina de about us */}
            </div>
            {isPage && <div className='container-nav'>
                <h2 className="asg">Home</h2>
                <h2 className="asg">About</h2>
            </div>}
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
