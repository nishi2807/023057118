import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import { data } from './const';

const clientgId = "244873686234-vtvor8q41b9eoe6vu3sdk3cjcer506c2.apps.googleusercontent.com"


function GoogleBtn() {
    const navigate = useNavigate();

    const onSuccess = (res) => {
        console.log("Login Scuccess! Current User : ", res.profileObj);
        navigate("/dashboard")
        data.user = res.profileObj.name
    }

    const onFailure = (res) => {
        console.log("Login Failed! res : ", res)
        navigate("/")
    }

    const renderButton = ({ onClick, disabled }) => (
        <button
            onClick={onClick}
            disabled={disabled}
            className='btn-login-google'
        >
            <span>Google</span>
        </button >
    );

    return (
        <div id='signInButton'>
            <GoogleLogin
                clientId={clientgId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                render={renderButton}
            />
        </div>
    )
}

export default GoogleBtn;