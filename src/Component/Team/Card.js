// Card.js
import React from 'react';
import './Card.css';

const Card = ({ name, role, image }) => {
    return (
        <div className="team-card">
            <div className="image-container">
                <img src={image} alt={name} />
            </div>
            <div className="info">
                <span className="team-role">{role}</span>
                <span className="team-name">{name}</span>
            </div>
        </div>
    );
};

export default Card;
