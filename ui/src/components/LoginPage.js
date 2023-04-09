import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
// import axios from 'axios';
import './Login.css'
import GoogleBtn from './googlebtn';
import { data } from './const';

const CLIENT_ID = "3584ebcb02e8bbe0ba8b";
const CLIENTG_ID = "244873686234-vtvor8q41b9eoe6vu3sdk3cjcer506c2.apps.googleusercontent.com"

const LoginPage = () => {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENTG_ID,
      })
    };
    gapi.load('client:auth2', start);
  })

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
      const datas = await response.json();
      console.log(datas.success)
      if (datas.success) {
        data.user = datas.email
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
  //   .then(datas => {
  //     if (datas.url) {
  //       window.location.replace(datas.url); // Redirect to the Google authentication URL
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
            <div className='login-fp'>Forgot Password?</div>
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
            <GoogleBtn />
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