import React, { useState } from 'react';
import { Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
// import background from './project-1.png';
import { useNavigate } from 'react-router-dom';
import { data } from './const';

const SignupPage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [role, setRole] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password === cpassword) {
            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                if (response.ok) {
                    const datas = await response.json();
                    // Do something with the response data, such as setting it in state
                    data.user = email
                    console.log(datas);

                    navigate("/mainpage")
                } else {
                    // Handle the error response from the server
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.log("Enter Password Again..")
        }
    };

    return (
        <div className='signup-main-con'>
            <div className='signup-bg-con'></div>
            <div className='signup-con'>
                <div className='signup-blur-container'>
                    <h1 className='signup-title'>SignUp</h1>
                    <Form onSubmit={handleSubmit} method='POST'>
                        <Form.Group controlId="formBasicRole">
                            <Form.Label id='signup-subheading'>Select Role</Form.Label>
                            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="applicant">Job Applicant</option>
                                <option value="recruiter">Job Recruiter</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label id='signup-subheading'>Name</Form.Label>
                            <Form.Control
                                type="name"
                                name='name'
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label id='signup-subheading'>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name='email'
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label id='signup-subheading'>Enter Password</Form.Label>
                            <Form.Control
                                type="password"
                                name='password'
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Form.Label id='signup-subheading'>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name='confirmpassword'
                                placeholder="Confirm Password"
                                value={cpassword}
                                onChange={(e) => setCpassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <div className='signup-bottom-con'>
                            <button type="submit" name='signup' className="signup-btn" >Sign up</button>
                            <div className='signup-bottom-text'>
                                <p>
                                    Already have an account? <Link to="/">LogIn</Link>
                                </p>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;