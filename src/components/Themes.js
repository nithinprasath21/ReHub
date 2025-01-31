// src/components/Themes.js
import React from 'react';
import '../styles/Theme.css'; // Import the CSS for styling

function Themes() {
    return (
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
    );
}

export default Themes;
