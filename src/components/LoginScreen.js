import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/LoginScreen.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="overlay" />
      <div className="login-box">
        <img
          src={require("../assets/yucca-logo.png")}
          alt="Yucca Logo"
          className="yucca-logo"
        />

        <p className="subtext">Login To Yucca</p>
        <p className="subtex1">Enter your login to sign up for this app</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />

        <button className="main-button" onClick={handleLogin}>Login</button>

        <p className="divider">or</p>

        <button className="google-button" onClick={handleGoogleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="google-icon"
          />
          Continue with Google
        </button>

        <p className="signup-redirect">
          Don’t have an account yet?{" "}
          <span onClick={() => navigate("/signup")} className="signup-link">
            Sign Up.
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
