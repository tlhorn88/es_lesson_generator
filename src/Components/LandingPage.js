import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onSearch }) => {
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            onSearch(event.target.value);
        }
    };

    return (
        <div className="landing-page">
            <h1>Welcome to the Lesson Plan Generator!</h1>
            <p>Start by searching for songs, concepts, or activities:</p>
            <input
                type="text"
                placeholder="Search..."
                onKeyDown={handleSearch}
                className="search-bar"
            />
        </div>
    );
};

export default LandingPage;