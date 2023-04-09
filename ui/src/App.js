import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router,Switch,Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import ForgotPassword from './components/forgotpassword';



function App() {
  return (

      <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/mainpage" element={<MainPage/>}></Route>
        <Route path="/forgot" element={<ForgotPassword/>}></Route>
       </Routes>
       </BrowserRouter>
      </div>


  );
}


export default App;
