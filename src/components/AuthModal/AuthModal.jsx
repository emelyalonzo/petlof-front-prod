import React from 'react';
import {useState} from "react";


const Authmodal = ({setShowModal, isSignUp }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = () => {
        setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            if (isSignUp && ( password !== confirmPassword)) {
                setError('Passwords does not match')
            }
            // TODO POST REQUEST TO OUR DB
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>
            ⨂
            </div>
            <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
            <p>By clicking login, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy</p>
        
            <form onSubmit={handleSubmit}>
                <input 
                type="email"
                name="email" 
                id="email" 
                placeholder="Email address" 
                required={true} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Password" 
                required={true} 
                onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input 
                type="password" 
                name="passwordCheck" 
                id="passwordCheck" 
                placeholder="Repeat your password" 
                required={true} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>

            </form>
            <hr/>
            <h2>GET THE APP</h2>
        </div>
    );
}

export default Authmodal;
