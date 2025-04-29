import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpScreen.css";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== repassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ Account created successfully! Please log in.");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="overlay" />
      <div className="signup-box">
        <img
          src={require("../assets/yucca-logo.png")}
          alt="Yucca Logo"
          className="yucca-logo"
        />
        <h2 className="signup-title">Sign in</h2>

        <input
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          placeholder="Enter Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
          className="input-field"
        />
        <input
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <input
          placeholder="Re-enter Password"
          type="password"
          onChange={(e) => setRepassword(e.target.value)}
          className="input-field"
        />

        <button onClick={handleSignup} className="main-button">Continue</button>

        <p className="divider">or</p>

        <button className="google-button" onClick={handleGoogleSignup}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="google-icon"
          />
          Continue with Google
        </button>

        <p className="login-redirect">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="login-link">
            Log in.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
