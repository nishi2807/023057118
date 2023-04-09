import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import './Login.css'

const CLIENT_ID = "3584ebcb02e8bbe0ba8b";

const LoginPage = () => {

  function loginwithGitHub() {
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data.success)
      if (data.success) {
        navigate('/mainpage');
      }
    } catch (err) {
      if (err.message === "Incorrect Email!" || err.message === "Incorrect Passowrd!") {
        console.error(err);
      } else {
        console.error("hello")
      }
    }
  };

  // const google = () => {
  //   window.open("http://localhost:3000/auth/google", "_self");
  // };

  // const github = () => {
  //   window.open("http://localhost:3000/auth/github", "_self");
  // };

  // const handleGoogleAuth = () => {
  //   fetch('/google', {
  //     method: 'GET',
  //     credentials: 'include' // Include cookies in the request
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     if (data.url) {
  //       window.location.replace(data.url); // Redirect to the Google authentication URL
  //     }
  //   })
  //   .catch(err => console.error(err));
  // };
  // function handleCallbackResponse(response){
  //   console.log("Encoded JWT"+response.credential);
  // }

  // useEffect(()=>{
  //   /* global google */
  //   google.accounts.id.initialize({
  //     clientId:"306598628041-637c2jh8kcmo7gh5p6sp76ui54hsss9l.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   })
  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     {theme:"outline", size:"large"}
  //   )
  // },[]);

  return (
    <div className='login-main-con'>
      <div className='login-bg-con'></div>
      <div className='login-con'>
        <div className='login-blur-container'>
          <h1 className='login-title'>LogIn</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label id='login-subheading'>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label id='login-subheading'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className='login-fp'>Forget Passowrd?</div>
          </Form>
          <div className='login-btm'>
            <button type="submit" className='login-butn' onClick={handleSubmit}> Login</button>
          </div>
          <div className='login-bottom'>
            - Or -
          </div>
          <div className='login-bottom-btns'>
            <button className='btn-login' onClick={loginwithGitHub}> GitHub</button>
            <div className='login-empty'></div>
            <button className='btn-login' >Google</button>
          </div>
          <div className='login-bottom-text'>
            <p>
              Don't have an account? <Link to="/signup">SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;