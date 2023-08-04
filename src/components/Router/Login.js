import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Login.css';
import axios from 'axios';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [responseData, setResponseData] = useState('');
  const Navigate = useNavigate();

  const submission = async (event) => {
    event.preventDefault();
      console.log("in login");
       axios.post(
        "/api/v1/auth/login",
        {
          email: email,
          password: password,
        }
      )
      .then( res => {

        console.log(res);
        setSuccessMessage('Login successfully .');
        setErrorMessage('');
        setResponseData(res.data);
        console.log('Response Data:', res.data);
        alert('login successfully');
        Navigate("/FormComponent")
      })
      .catch (err => {
        alert("Email or Password is Incorrect")

        console.error('Error:', err);
      })
  
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form onSubmit={submission}>
          <h2 className="login-header">Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={e => setemail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={e => setpassword(e.target.value)} />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <div className="login-links">
            <p className="signup-link">
              Don't have an account? <a href="/Signup">Sign up</a>
            </p>
            <p className="forgot-password-link">
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
        <div className="image-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png"
            alt="Image"
            className="login-image"
          />
        </div>
      </div>
    </>
  );
}

export default Login;
