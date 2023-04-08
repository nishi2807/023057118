import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import background from './project-1.png'

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here
    };

    return (
        <div className='signup-main-container'>
            <div className='signup-blur-container'>
                <h1 className='signup-title'>Sign up</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label id='signup-subheading'>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label id='signup-subheading'>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label id='signup-subheading'>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <button type="submit" className="signup-btn">Sign up</button>
                    <div className='signup-bottom-text'>
                        <p>
                        Already have an account? <Link to="/">Login here</Link>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignupPage;








// ---------------------

{/* <h1 style={{ color: "green" }}>Signup</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label style={{ color: "green" }}>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ color: "green" }}>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ color: "green" }}>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>


                    <Button variant="success" type="submit" className="myFontClass">Signup</Button>


                    <p className="mt-4">
                        Already have an account? <Link to="/">Login here</Link>
                    </p>
                </Form> */}
