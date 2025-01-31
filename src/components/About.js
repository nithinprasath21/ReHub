// src/components/About.js
import React from 'react';
import '../styles/About.css'; // Import the CSS for styling
import aboutImage from '../assets/re6.webp'; // Import the image

function About() {
    return (
        <section id="about" className="about-section">
            <div className="container section-title">
                <h2>About Us</h2>
            </div>
            <div className="container">
                <div className="row align-items-center about-content">
                    <div className="col-md-5 d-flex align-items-center">
                        <img src={aboutImage} className="img-fluid about-image" alt="About Ré" />
                    </div>
                    <div className="col-md-7">
                        <h3>At Ré,</h3>
                        <p className="about-description">
                            Welcome to Ré, the epicenter of innovation and research at Kumaraguru Institutions. Our mission is to fuel the spirit of inquiry, driving students to push boundaries and transform their ideas into impactful solutions. At Ré, we believe that every student harbors the potential to pioneer advancements and create a sustainable future.
                        </p>
                        <ul className="about-list">
                            <li><strong>Igniting Curiosity and Exploration:</strong> We foster a culture that encourages students to explore, innovate, and excel in their respective fields.</li>
                            <li><strong>Bridging Knowledge and Real-World Applications:</strong> Our platform provides students with resources and mentorship from seasoned researchers and industry experts.</li>
                            <li><strong>Fostering Collaboration and Innovation:</strong> Through interdisciplinary teamwork, students are equipped to tackle complex challenges and contribute to society's progress.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
