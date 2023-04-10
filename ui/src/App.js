import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import ForgotPassword from './components/forgotpassword';
import ResetPassword from './components/resetpassword';



function App() {
  return (

      <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/mainpage" element={<MainPage/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
       </Routes>
       </BrowserRouter>
      </div>


  );
}


export default App;
