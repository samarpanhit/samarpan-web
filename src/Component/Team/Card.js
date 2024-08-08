// Card.js
import React from 'react';

const Card = (props) => {
    const { name, role, image } = props;
console.log(image);
    return (
        <div className='team-card'>
            <img src={image}/>
            <span className='team-role'>{role}</span>
            <span className='team-name'>{name}</span>
        </div>
    );
};

export default Card;
