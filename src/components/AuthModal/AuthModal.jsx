import React from 'react';
import {useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Authmodal = ({setShowModal, isSignUp }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const handleClick = () => {
        setShowModal(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isSignUp && ( password !== confirmPassword)) {
                setError('Passwords does not match')
                return
            }
            console.log(email, password)
            const response = await axios.post('http://localhost:3001/users/signup', {"email" : email, "hashed_password" : password});
            console.log(response)
            if (response.status === 200) navigate('/signup');

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
        </div>
    );
}

export default Authmodal;
