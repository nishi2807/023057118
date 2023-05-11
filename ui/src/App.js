import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import ForgotPassword from './components/forgotpassword';
import ResetPassword from './components/resetpassword';
import MyApplications from './components/Applicants/MyApplication';
import JobsList from './components/Applicants/JobsList';
import AddEducation from './components/Applicants/AddEducation';
import { useState } from 'react';

function App() {
  const [educationList, setEducationList] = useState([]);

  const handleAddEducation = (education) => {
    setEducationList([...educationList, education]);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/MyApplications" element={<MyApplications />} />
          <Route path="/JobsList" element={<JobsList />} />
          <Route path="/AddEducation" element={<AddEducation onAddEducation={handleAddEducation} />} />
        </Routes>
      </BrowserRouter>

      <ul>
        {educationList.map((education, index) => (
          <li key={index}>
            School: {education.school}, Degree: {education.degree}, Start Date: {education.startDate}, End Date: {education.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;