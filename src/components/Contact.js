// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css'; // Import the CSS for styling

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-wrapper">
                <div className="contact-info">
                    <p><strong>Address:</strong> Kumaraguru College of Technology, Coimbatore</p>
                    <p><strong>Email:</strong> student.research@kct.ac.in</p>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-input" placeholder="Your Name" required />
                            <input type="email" className="form-input" placeholder="Your Email" required />
                        </div>
                        <input type="text" className="form-input" placeholder="Subject" required />
                        <textarea className="form-textarea" placeholder="Message" rows="4" required></textarea>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
