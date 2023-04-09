import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import { useEffect, useState } from "react";



function App() {

  

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = () => {
  //     fetch("http://localhost:3000/auth/login/success", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         throw new Error("authentication has been failed!");
  //       })
  //       .then((resObject) => {
  //         setUser(resObject.user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
  // }, []);

  return (

      <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/mainpage" element={<MainPage/>}></Route>
       </Routes>
       </BrowserRouter>
      </div>


  );
}


export default App;
