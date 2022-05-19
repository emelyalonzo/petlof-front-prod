import React from 'react';

const Nav = ({minimal, authToken, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false); //its false because when clicking we are logging in
    }

    return (
        <nav>
            {/* Homepage UI TODO */}

            {!authToken && !minimal && <button
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}>
            Log in</button>}
        </nav>
    );
}

export default Nav;
