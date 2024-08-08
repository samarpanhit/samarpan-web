import React from 'react';
import Card from './Card';
import './team.css';
import core_member from '../../Database/Team/Core_member.json';

const Team = () => {
    return (
        <div className='team-container'>
            <h1>TEAM</h1>
            <div className='team-content'>
                {core_member.map((member, i) => (
                    <Card 
                        key={i} 
                        name={member.name} 
                        role={member.role} 
                        id={member.id} 
                        image={require(`../../assets/Team/core/newest/n-${i+1}.jpg`)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Team;
