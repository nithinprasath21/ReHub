// src/components/Timeline.js
import React, { useState } from 'react';
import '../styles/Timeline.css'; // Import the CSS for styling
import timeimg from "../assets/re7.webp";

function Timeline() {
    const [selectedReview, setSelectedReview] = useState('zeroth'); // Default selection

    const reviews = {
        zeroth: {
            title: "Zeroth Review",
            description: "The Zeroth Review focuses on initial project ideas and concepts. This stage allows for brainstorming and refining ideas before moving forward.",
            image: timeimg, // Replace with actual image path
        },
        first: {
            title: "First Review",
            description: "The First Review assesses the feasibility of the proposed project. Feedback is provided to enhance project viability.",
            image: timeimg, // Replace with actual image path
        },
        second: {
            title: "Second Review",
            description: "The Second Review evaluates the progress made on the project. Adjustments are made based on mentor feedback.",
            image: timeimg,
        },
        final: {
            title: "Final Review",
            description: "The Final Review is the culmination of the project. Students present their work and receive final evaluations.",
            image: timeimg, // Replace with actual image path
        },
    };

    const handleReviewChange = (review) => {
        setSelectedReview(review);
    };

    return (
        <section className="timeline-section">
            <h2 className="timeline-title">Project Timeline</h2>
            <div className="timeline-links">
                {Object.keys(reviews).map((review) => (
                    <button 
                        key={review} 
                        className={`timeline-button ${selectedReview === review ? 'active' : ''}`} 
                        onClick={() => handleReviewChange(review)}
                    >
                        {reviews[review].title}
                    </button>
                ))}
            </div>
            <div className="timeline-content">
                <div className="timeline-image" style={{ flexBasis: '40%' }}>
                    <img src={reviews[selectedReview].image} alt={reviews[selectedReview].title} />
                </div>
                <div className="timeline-text" style={{ flexBasis: '60%' }}>
                    <h3>{reviews[selectedReview].title}</h3>
                    <p>{reviews[selectedReview].description}</p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
