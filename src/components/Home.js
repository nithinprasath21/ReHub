// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Re</h1>
            <div className="domains">
                <div>Domain 1</div>
                <div>Domain 2</div>
                <div>Domain 3</div>
                <div>Domain 4</div>
                <div>Domain 5</div>
            </div>
            <Link to="/apply">
                <button>Apply</button>
            </Link>
            <Link to="/admin">
                <button>Go to Admin Page</button>
            </Link>
        </div>
    );
}

export default Home;
