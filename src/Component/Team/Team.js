import React from 'react';
import Card from './Card';
import './team.css';
import core_member from '../../Database/Team/Core_member.json';

const Team = () => {
    return (
        <div className="team-container">
            <h1>TEAM</h1>

            {/* First 2 members */}
            <div className="top-row-wrapper">
                {[0, 1].map(i => {
                    if (i >= core_member.length) return null;
                    const member = core_member[i];
                    const imgPath = require(`../../assets/Team/core/m-${i + 1}.${member.imageFormat}`);
                    return (
                        <Card
                            key={i}
                            name={member.name}
                            role={member.role}
                            image={imgPath}
                        />
                    );
                })}
            </div>

            {/* Next 4 members inside circle */}
            <div className="circle-wrapper">
                {[2, 3, 4, 5].map(i => {
                    if (i >= core_member.length) return null;
                    const member = core_member[i];
                    const imgPath = require(`../../assets/Team/core/m-${i + 1}.${member.imageFormat}`);
                    return (
                        <Card
                            key={i}
                            name={member.name}
                            role={member.role}
                            image={imgPath}
                        />
                    );
                })}
            </div>

            {/* Remaining members in 3 per row */}
            <div className="three-cols-wrapper">
                {core_member.slice(6).map((member, index) => {
                    const actualIndex = index + 6;
                    const imgPath = require(`../../assets/Team/core/m-${actualIndex + 1}.${member.imageFormat}`);
                    return (
                        <Card
                            key={actualIndex}
                            name={member.name}
                            role={member.role}
                            image={imgPath}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Team;
