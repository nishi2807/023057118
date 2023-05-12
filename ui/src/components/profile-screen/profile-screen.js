import React, { useState } from "react";
import "../profile-screen/profile-screen.css";

function Profile_Screen() {
    const [personalData, setPersonalData] = useState({
        firstName: "", // To add default data just add data in the variables
        lastName: "",
        age: "",
        gender: "",
    });

    const [contactData, setContactData] = useState({
        mail: "", // To add default data just add data in the variables
        phone_number: "",
    });

    const [educationData, setEducationData] = useState({
        school: "", // To add default data just add data in the variables
        board: "",
        university: "",
        study_field: "",
        start_date: "",
        end_date: "",
    });

    const [skills, setSkills] = useState({
        skills: "",
    })

    const handleInputPersonalData = (event) => {
        const { name, value } = event.target;
        setPersonalData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handlePersonalData = (event) => {
        event.preventDefault();
        console.log(personalData);
    };

    const handleInputContactData = (event) => {
        const { name, value } = event.target;
        setContactData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleContactData = (event) => {
        event.preventDefault();
        console.log(contactData);
    };

    const handleInputEducationData = (event) => {
        const { name, value } = event.target;
        setEducationData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleEducationData = (event) => {
        event.preventDefault();
        console.log(educationData);
    };

    const handleInputSkillData = (event) => {
        const { name, value } = event.target;
        setSkills((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSkillData = (event) => {
        event.preventDefault();
        console.log(skills);
    };

    return (
        <div className="ps-main-div">
            <div className="ps-title">My Profile</div>
            <div className="floating-div">
                {/* Personal Details Form */}
                <div className="divider">
                    <div className="divider-line1"></div>
                    <div className="divider-text">Personal Details</div>
                    <div className="divider-line2"></div>
                </div>
                <form onSubmit={handlePersonalData} className="personal-details-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name:</label>
                            <input
                                type="text"
                                id="first-name"
                                name="firstName"
                                value={personalData.firstName}
                                onChange={handleInputPersonalData}
                                required
                            />
                        </div>
                        <div className="div-gap"></div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name:</label>
                            <input
                                type="text"
                                id="last-name"
                                name="lastName"
                                value={personalData.lastName}
                                onChange={handleInputPersonalData}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="age">Age:</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={personalData.age}
                                onChange={handleInputPersonalData}
                                required
                            />
                        </div>
                        <div className="div-gap"></div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <select
                                id="gender"
                                name="gender"
                                value={personalData.gender}
                                onChange={handleInputPersonalData}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-btn-div" >
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {/* Contact details */}
                <div className="divider">
                    <div className="divider-line1"></div>
                    <div className="divider-text">Contact Details</div>
                    <div className="divider-line2"></div>
                </div>
                <form onSubmit={handleContactData} className="personal-details-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">Mail:</label>
                            <input
                                type="text"
                                id="mail"
                                name="mail"
                                value={contactData.mail}
                                onChange={handleInputContactData}
                                required
                            />
                        </div>
                        <div className="div-gap"></div>
                        <div className="form-group">
                            <label htmlFor="last-name">Phone Number:</label>
                            <input
                                type="text"
                                id="phone_number"
                                name="phonenumber"
                                value={contactData.phone_number}
                                onChange={handleInputContactData}
                            />
                        </div>
                    </div>
                    <div className="form-btn-div" >
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {/* Education details */}
                <div className="divider">
                    <div className="divider-line1"></div>
                    <div className="divider-text">Education Details</div>
                    <div className="divider-line2"></div>
                </div>
                <form onSubmit={handleEducationData} className="personal-details-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">School:</label>
                            <input
                                type="text"
                                id="school"
                                name="school"
                                value={educationData.school}
                                onChange={handleInputEducationData}
                                required
                            />
                        </div>
                        <div className="div-gap"></div>
                        <div className="form-group">
                            <label htmlFor="last-name">Board:</label>
                            <input
                                type="text"
                                id="board"
                                name="board"
                                value={educationData.board}
                                onChange={handleInputEducationData}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="age">University:</label>
                            <input
                                type="text"
                                id="university"
                                name="university"
                                value={educationData.university}
                                onChange={handleInputEducationData}
                                required
                            />
                        </div>
                        <div className="div-gap"></div>
                        <div className="form-group">
                            <label htmlFor="age">Field of study:</label>
                            <input
                                type="text"
                                id="study_field"
                                name="study_field"
                                value={educationData.study_field}
                                onChange={handleInputEducationData}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="start-date">Start:</label>
                            <input
                                type="date"
                                id="start_date"
                                name="start_date"
                                value={educationData.start_date}
                                onChange={handleInputEducationData}
                                required
                            />
                        </div>
                        <div className="div-gap"></div>
                        <div className="form-group">
                            <label htmlFor="end-date">End:</label>
                            <input
                                type="date"
                                id="end_date"
                                name="end_date"
                                value={educationData.end_date}
                                onChange={handleInputEducationData}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-btn-div" >
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {/* Skills details */}
                <div className="divider">
                    <div className="divider-line1"></div>
                    <div className="divider-text">Skills Details</div>
                    <div className="divider-line2"></div>
                </div>
                <form onSubmit={handleSkillData} className="personal-details-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">Skills:</label>
                            <input
                                type="text"
                                id="skills"
                                name="skills"
                                value={skills.skills}
                                onChange={handleInputSkillData}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-btn-div" >
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile_Screen;