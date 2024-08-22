import React from 'react';
import './Gcard.css'; // Add appropriate styling

const Gcard = ({ images, title, onClick }) => {
    return (
        <div className="gcard" onClick={onClick}>
            <img src={images[0].imageUrl} alt={title} className="gcard-thumbnail" />
            <h3>{title}</h3>
        </div>
    );
};

export default Gcard;
