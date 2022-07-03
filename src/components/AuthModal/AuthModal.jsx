import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import woolBall from "../../images/woolBall.svg";
import closeicon from "../../images/closeIcon.svg";
import { useUser } from "../../hooks";
// import useUser from "../../hooks/useUser";

const Authmodal = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const {user, add, errAPI} = useUser();

  let navigate = useNavigate();

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords does not match");
        return;
      }
      console.log(email, password);
      if (
        isSignUp &&
        !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      ) {
        setError(
          "Password must contain at least 8 characters, including numbers, one uppercase and one lowercase "
        );
        return;
      }

      add(isSignUp, email, password);
      console.log(errAPI)
      if (errAPI && errAPI.includes('Please login') && isSignUp) {
        setError(errAPI)
      }

      if (user && isSignUp) {
        localStorage.setItem("AuthToken", user.token);
        localStorage.setItem("UserId", user.userId);
        localStorage.setItem("Id", user.id);
        localStorage.setItem("FirstStep", "true");
        navigate("/signup");
      }
      if (user && !isSignUp) {
        localStorage.setItem("AuthToken", user.token);
        localStorage.setItem("UserId", user.userId);
        localStorage.setItem("Id", user.id);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        <img className="closeicon" src={closeicon} alt="Close Icon" />
      </div>
      <div className="container-title">
        <img className="woolBall" src={woolBall} alt="Wool Ball" />
        <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      </div>
      <p>
        By clicking login, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy
      </p>

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
        {isSignUp && (
          <input
            type="password"
            name="passwordCheck"
            id="passwordCheck"
            placeholder="Repeat your password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Authmodal;
