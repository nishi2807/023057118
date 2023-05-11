import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { data } from '../const';
import { BsPersonCircle } from 'react-icons/bs';
import GoogleLogOutBtn from '../googlelogoutbtn';
import { useNavigate } from "react-router-dom";
// import '../Login.css'

// // Styles for components
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         padding: theme.spacing(2),
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
// }));

const Dashboard = ({ onAddEducation }) => {
    // const classes = useStyles();

    // State for education details
    // const [school, setSchool] = useState('');
    // const [degree, setDegree] = useState('');
    // const [startdate, setStartdate] = useState('');
    // const [enddate, setEnddate] = useState('');

    // Handle form submission
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const response = await fetch('/user/edit_profile/:id', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ school, degree, startdate, enddate }),
    //     });

    //     onAddEducation({ school, degree, startdate, enddate });
    //     setSchool('');
    //     setDegree('');
    //     setStartdate('');
    //     setEnddate('');
    // };
    const navigate = useNavigate();

    function handleChange() {
        navigate("/signup");
    }

    return (
        <div className='ms-main-con'>
            <div className='ms-title-bar'>
                <h3 className='ms-title'>JobPower</h3>
                <GoogleLogOutBtn />
            </div>
            <div className='ms-con'>
                {/* <Row >
                    <h1>Welome, Lets Find You a Job!</h1>
                    <hr></hr> </Row> */}
                <Container>
                    <Row>
                        {/* <Col sm={3} style={{ margin: '40px' }}> */}
                        {/* <Row style={{ margin: '20px' }}>
                                <Button type='button' style={{ backgroundColor: 'black', color: 'white', margin: '10px' }}> Search Results</Button>
                                <hr></hr>
                            </Row> */}
                        <Col sm={3}>
                            <Card className='ms-blur-con' style={{ width: '100%', padding: '30px', height: 'auto', marginBlockStart: 'none' }}>
                                {/* <Person size={100}></Person> */}
                                <Row>
                                    <BsPersonCircle size={120} color='grey'></BsPersonCircle>
                                </Row>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>{data.user}</Card.Title>
                                    <Card.Text>
                                        <p style={{ alignItems: 'flex-start' }}>
                                            Email:
                                        </p>
                                        <p style={{ alignItems: 'flex-start' }}>
                                            Education:
                                        </p>
                                        <p style={{ alignItems: 'flex-start' }}>
                                            Skills:
                                        </p>
                                    </Card.Text>
                                    <Row>
                                        <Button variant="primary" style={{ backgroundColor: '#3399ff', color: 'white' }}>Edit Profile</Button>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Button variant="primary" style={{ backgroundColor: '#3399ff', color: 'white' }}>Job Applications</Button>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Button variant="primary" style={{ backgroundColor: '#3399ff', color: 'white' }}>Build Resume</Button>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='ms-blur-con' style={{ width: 'auto', padding: '30px', height: 'auto', marginBlockStart: 'none' }}>
                                {/* <Person size={100}></Person> */}
                                <Row>
                                    <BsPersonCircle size={120} color='grey'></BsPersonCircle>
                                </Row>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>{data.user}</Card.Title>
                                    <Card.Text>
                                        <p style={{ alignItems: 'flex-start' }}>
                                            Email:
                                        </p>
                                        <p style={{ alignItems: 'flex-start' }}>
                                            Education:
                                        </p>
                                        <p style={{ alignItems: 'flex-start' }}>
                                            Skills:
                                        </p>
                                    </Card.Text>
                                    <Row>
                                        <Button variant="primary" style={{ backgroundColor: '#3399ff', color: 'white' }}>Edit Profile</Button>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Button variant="primary" style={{ backgroundColor: '#3399ff', color: 'white' }}>Job Applications</Button>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Button variant="primary" style={{ backgroundColor: '#3399ff', color: 'white' }}>Build Resume</Button>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* </Col> */}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Dashboard;