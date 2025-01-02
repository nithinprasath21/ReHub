// src/components/Apply.js
import React, { useState } from 'react';
import axios from 'axios';

function Apply() {
    const [formData, setFormData] = useState({
        projectName: '',
        projectDescription: '',
        ppt: null,
        studentName: '',
        collegeEmail: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, ppt: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        await axios.post('http://localhost:5000/api/projects', data);
        alert("Thanks for submitting. You will be informed soon.");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="projectName" placeholder="Project Name" onChange={handleChange} required />
            <input type="text" name="projectDescription" placeholder="Project Description" onChange={handleChange} required />
            <input type="file" name="ppt" onChange={handleFileChange} required />
            <input type="text" name="studentName" placeholder="Name of Student" onChange={handleChange} required />
            <input type="email" name="collegeEmail" placeholder="College Mail ID" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Apply;
