import React from 'react';
import GitHubLogin from 'react-github-login';
import { useNavigate } from 'react-router-dom';
import { data } from './const';
// import './Login.css';


const GitHubBtn = () => {
    const navigate = useNavigate();

    const onSuccess = (res) => {
        console.log("Login Scuccess! Current User : ", res.profileObj);
        navigate("/mainpage")
        data.user = res.profileObj.name;
    };

    const onFailure = (res) => {
        console.log("Login Failed! res : ", res)
        navigate("/")
    };

    const renderButton = ({ onClick, disabled }) => (
        <button
            onClick={onClick}
            disabled={disabled}
            className='btn-login'
        >
            <span>GitHub</span>
        </button >
    );

    return (
        <GitHubLogin
            clientId="3584ebcb02e8bbe0ba8b"
            onSuccess={onSuccess}
            onFailure={onFailure}
            redirectUri="http://localhost:3000/callback"
            scope="user"
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            render={renderButton}
        />
    );
};

export default GitHubBtn;