// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import heroimg from "../assets/re-hero.jpg";
import projectImage from "../assets/re2.webp"; // Import the right column image
import Timeline from './Timeline';

function Home() {
    return (
        <>
            <section id="hero" className="hero section dark-background">
                <img src={heroimg} alt="Hero Background" className="hero-bg" />

                <div className="overlay">
                    <div className="container" style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="row gy-4 justify-content-between">
                            <div className="d-flex flex-column justify-content-center" style={{ textAlign: 'center' }} data-aos="fade-in">
                                <h1>Ignite Your Ideas, Transform the Future</h1>
                                <p>Join the Project Intake Program at Ré</p>
                                <div className="d-flex" style={{ justifyContent: 'center' }}>
                                    <a href="/add-project" className="btn-get-started">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Feature Section */}
            <section className="project-intake-section">
                <div className="row">
                    <div className="left-column">
                        <h2>Project Intake Program at Ré</h2>
                        <p>The Project Intake Program at Ré provides an opportunity for students to propose and develop projects that align with their academic goals, passions, and the broader mission of Ré. This program is designed to foster innovation, research, and hands-on experience, empowering students to contribute to impactful projects with the support of expert mentors, state-of-the-art resources, and a collaborative ecosystem.</p>

                        <ul>
                            <li>Identify and evaluate student-led projects with the potential for real-world impact.</li>
                            <li>Gain exposure to industry trends and research methodologies.</li>
                            <li>Showcase skills and contribute meaningfully to the community.</li>
                        </ul>
                    </div>
                    <div className="right-column">
                        <img src={projectImage} alt="Project Intake Program" />
                    </div>
                </div>
            </section>

            <section className="statistics-section">
                <div className="container statistics-container">
                    <div className="statistic-item">
                        <h3>847</h3>
                        <p>Supported Startups</p>
                    </div>
                    <div className="statistic-item">
                        <h3>60+</h3>
                        <p>Patents Filed</p>
                    </div>
                    <div className="statistic-item">
                        <h3>1483</h3>
                        <p>Employment Generated</p>
                    </div>
                    <div className="statistic-item">
                        <h3>1431</h3>
                        <p>Events Conducted</p>
                    </div>
                </div>
            </section>

            {/* New Section: Why Choose the Project Intake Program? */}
            <section className="why-choose-section">
                <h2>Why Choose the Project Intake Program?</h2>
                <p>Join us to transform your ideas into impactful projects with the support of expert mentors, resources, and a collaborative ecosystem.</p>

                <div className="cards-container">
                    {/* Card 1 */}
                    <div className="card">
                        <h3>01</h3>
                        <h4>Guidance & Mentorship</h4>
                        <p>Work closely with experienced mentors to refine your ideas and develop innovative solutions that align with your academic and professional goals.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="card">
                        <h3>02</h3>
                        <h4>Industry Exposure</h4>
                        <p>Gain exposure to the latest industry trends and research methodologies, preparing you for future careers in academia, industry, and beyond.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="card">
                        <h3>03</h3>
                        <h4>Real-World Impact</h4>
                        <p>Contribute to projects that aim to solve real-world problems and achieve the Sustainable Development Goals, making a meaningful impact on society.</p>
                    </div>
                </div>
            </section>
            <section className="who-can-apply-section">
                <h2 className="who-can-apply-title">Who Can Apply</h2>
                <h3 className="who-can-apply-subtitle">Eligibility criteria for applicants:</h3>
                <ul className="who-can-apply-list">
                    <li>Technovative and/or appeal to a mass market</li>
                    <li>Implementable</li>
                    <li>Commercially viable</li>
                    <li>Entirely new, better alternative and/or affordable</li>
                    <li>Committed individual/team</li>
                </ul>
            </section>
            <section id="theme" className="themes-section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h2 className="themes-title">THEMES</h2>
                <p className="themes-description">We welcome your proposals under the following themes:</p>
                <div className="cards-container">
                    {/* Card 1 */}
                    <div className="theme-card">
                        <h3>Food and Agriculture</h3>
                        <p>Innovative solutions for farming, food production, and resource management.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="theme-card">
                        <h3>Bioenergy</h3>
                        <p>Harnessing biological resources to produce renewable energy for a sustainable future.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="theme-card">
                        <h3>Sustainable Materials</h3>
                        <p>Eco-friendly packaging and construction solutions to reduce environmental impact.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="theme-card">
                        <h3>Water Engineering</h3>
                        <p>Advanced systems for water purification, recycling, and efficient usage.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="theme-card">
                        <h3>Microgrids</h3>
                        <p>Localized renewable energy systems for efficient and sustainable power generation.</p>
                    </div>
                </div>
            </div>
        </section>
        <Timeline />
        </>
    );
}

export default Home;
