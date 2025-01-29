import React, { useState } from 'react';
import '../styles/AddProject.css'; // Import the styles
import logo from "../assets/re-img.png";

function AddProject() {
    const [hasTeam, setHasTeam] = useState('yes'); // State to manage team presence
    const [teamMembers, setTeamMembers] = useState([{ name: '', rollNo: '', emailID: '', contactNo: '' }]); // State for team members
    const [formData, setFormData] = useState({
        projectTitle: '',
        projectTheme: '',
        problemStatement: '',
        abstract: '',
        proposalDocument: null,
        interDepartmental: 'no',
        domains: [],
        teamMembersCount: '',
        mentorName: '',
        mentorDesignation: '',
        mentorDepartment: '',
        mentorEmail: '',
        mentorContact: '',
        projectLeadName: '',
        projectLeadRollNo: '',
        projectLeadInstitution: '',
        projectLeadDepartment: '',
        projectLeadEmail: '',
        projectLeadContact: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, proposalDocument: e.target.files[0] });
    };

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            domains: prev.domains.includes(value)
                ? prev.domains.filter(domain => domain !== value)
                : [...prev.domains, value]
        }));
    };

    const handleTeammateChange = (index, field, value) => {
        const newTeamMembers = [...teamMembers];
        newTeamMembers[index][field] = value;
        setTeamMembers(newTeamMembers);
    };

    const addTeammate = () => {
        setTeamMembers([...teamMembers, { name: '', rollNo: '', emailID: '', contactNo: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const departments = [
        'AERONAUTICAL', 
        'AUTOMOBILE', 
        'ARTIFICIAL INTELLIGENCE & DATA ANALYTICS', 
        'BIO TECHNOLOGY', 
        'CIVIL', 
        'COMPUTER SCIENCE', 
        'ECE', 
        'EEE', 
        'ELECTRONICS & INSTRUMENTATION', 
        'FASHION TECHNOLOGY', 
        'INFORMATION SCIENCE & ENGINEERING', 
        'INFORMATION TECHNOLOGY', 
        'MECHANICAL', 
        'MECHATRONICS', 
        'TEXTILE'
    ];

    return (
        <div className="container">
            <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Ré - Project Intake</h1>
            </div>
            <div className="intro-text">
                <p>This form is to register for the funding of student projects through Ré - KCT's Platform for Research and Exploration. Proceed to registration if you have the following details:</p>
                <ul>
                    <li>Mentor and Student information.</li>
                    <li>Project Proposal in PDF format.</li>
                    <li>Plagiarism report containing an uniqueness of 80% of your project proposal in PDF format.</li>
                </ul>
                <p>All the best!</p>
            </div>

            <div className="default-background"><h2>PROJECT DETAILS</h2>

            <form onSubmit={handleSubmit}>
                <label>1. Title of your project<span className="required">*</span></label>
                <input type="text" name="projectTitle" required onChange={handleChange} />

                <label>2. Theme of your project<span className="required">*</span></label>
                <div>
                    {['Energy', 'Intelligent transportation', 'Agriculture Technology', 'Underwater systems', 'Defense Technology'].map(theme => (
                        <label key={theme}>
                            <input type="radio" name="projectTheme" value={theme} onChange={handleChange} required />
                            {theme}
                        </label>
                    ))}
                </div>

                <label>3. Problem statement<span className="required">*</span></label>
                <input type="text" name="problemStatement" required onChange={handleChange} />

                <label>4. Abstract (Not more than 300 words)<span className="required">*</span></label>
                <textarea name="abstract" required onChange={handleChange}></textarea>

                <label>5. Upload the project proposal document<span className="required">*</span></label>
                <input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png" onChange={handleFileChange} required />

                <label>6. Is your project inter-departmental?<span className="required">*</span></label>
                <div>
                    {['Yes', 'No'].map(answer => (
                        <label key={answer}>
                            <input type="radio" name="interDepartmental" value={answer.toLowerCase()} onChange={(e) => setFormData({ ...formData, interDepartmental: e.target.value })} required />
                            {answer}
                        </label>
                    ))}
                </div>

                <label>7. Choose the domain of the project proposed<span className="required">*</span></label>
                {departments.map(domain => (
                    <label key={domain}>
                        <input type="checkbox" value={domain} onChange={handleCheckboxChange} />
                        {domain}
                    </label>
                ))}

                <label>8. No. of members in your team<span className="required">*</span></label>
                <input type="number" name="teamMembersCount" max="6" required onChange={handleChange} />

                <h2>MENTOR DETAILS</h2>

                {['mentorName', 'mentorDesignation', 'mentorDepartment', 'mentorEmail', 'mentorContact'].map((field, index) => (
                    <React.Fragment key={field}>
                        <label>{index + 9}. {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}<span className="required">*</span></label>
                        {field === 'mentorDesignation' ? (
                            ['Department head', 'Professor', 'Associate professor', 'Assistant professor', 'Other'].map(designation => (
                                <label key={designation}>
                                    <input type="radio" name={field} value={designation} required onChange={handleChange} />
                                    {designation}
                                </label>
                            ))
                        ) : (
                            <input type="text" name={field} required onChange={handleChange} />
                        )}
                    </React.Fragment>
                ))}

                <h2>PROJECT LEAD DETAILS</h2>

                {['projectLeadName', 'projectLeadRollNo'].map((field, index) => (
                    <React.Fragment key={field}>
                        <label>{index + 14}. {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}<span className="required">*</span></label>
                        <input type="text" name={field} required onChange={handleChange} />
                    </React.Fragment>
                ))}

                <label>16. Project Lead Institution<span className="required">*</span></label>
                {['KCT', 'KCLAS', 'KCT BS', 'KIA'].map(institution => (
                    <label key={institution}>
                        <input type="radio" name="projectLeadInstitution" value={institution} required onChange={handleChange} />
                        {institution}
                    </label>
                ))}

                <label>17. Project Lead Department<span className="required">*</span></label>
                <select name="projectLeadDepartment" required onChange={handleChange}>
                    <option value="">Select Department</option>
                    {departments.map(department => (
                        <option key={department} value={department}>{department}</option>
                    ))}
                </select>

                <label>18. Project Lead Email ID<span className="required">*</span></label>
                <input type="text" name="projectLeadEmailID" required onChange={handleChange}/>

                <label>19. Project Lead Contact Number<span className="required">*</span></label>
                <input type="text" name="projectLeadContactNumber" required onChange={handleChange}/>

                <label>20. Do you have a team for this project?<span className="required">*</span></label>
                {['Yes', 'No'].map(answer => (
                    <label key={answer}>
                        <input type="radio" name="hasTeam" value={answer.toLowerCase()} onChange={(e) => setHasTeam(e.target.value)} required />
                        {answer}
                    </label>
                ))}

                {hasTeam === 'no' && (
                    <button type="submit" className="submit-button">Submit</button>
                )}

                {hasTeam === 'yes' && (
                    <>
                        {teamMembers.map((member, index) => (
                            <React.Fragment key={index}>
                                <h3>{21 + index}. Name of member #{index + 2}</h3>
                                <label>Name<span className="required">*</span></label>
                                <input
                                    type="text"
                                    value={member.name}
                                    onChange={(e) => handleTeammateChange(index, "name", e.target.value)}
                                    required
                                />
                                <label>Roll No<span className="required">*</span></label>
                                <input
                                    type="text"
                                    value={member.rollNo}
                                    onChange={(e) => handleTeammateChange(index, "rollNo", e.target.value)}
                                    required
                                />
                                <label>Email ID<span className="required">*</span></label>
                                <input
                                    type="text"
                                    value={member.emailID}
                                    onChange={(e) => handleTeammateChange(index, "emailID", e.target.value)}
                                    required
                                />
                                <label>Contact No<span className="required">*</span></label>
                                <input
                                    type="text"
                                    value={member.contactNo}
                                    onChange={(e) => handleTeammateChange(index, "contactNo", e.target.value)}
                                    required
                                />
                            </React.Fragment>
                        ))}
                        <button type="button" className="add-teammate-button" onClick={addTeammate}>Add Teammate</button>
                        <button type="submit" className="submit-button">Submit</button>
                    </>
                )}
            </form> </div>
        </div>
    );
}

export default AddProject;