import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/">

      <div>
        <LoginPage />
        {/* <SignupPage /> */}
      </div>
  

    </BrowserRouter>
  );
}


export default App;
