import React from 'react';
import Card from './Card';
import './team.css';
import core_member from '../../Database/Team/Core_member.json';

const Team = () => {
    const renderMembers = (start, end, className) => (
        <div className={className}>
            {core_member.slice(start, end + 1).map((member, index) => {
                const actualIndex = start + index;
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
    );

    return (
        <div className="team-container">
            <h1>TEAM</h1>

            {/* First 2 members */}
            {renderMembers(0, 1, 'top-row-wrapper')}

            {/* Next 4 members in circular layout */}
            {renderMembers(2, 5, 'circle-wrapper')}

            {/* Next 10 members (6–15) in 3-column layout */}
            {renderMembers(6, 14, 'three-cols-wrapper')}

            {/* Next 2 members (16–17) in row */}
            {renderMembers(15, 16, 'top-row-wrapper')}

            {/* Remaining members after 17 in 3-column layout */}
            {core_member.length > 17 && renderMembers(17, core_member.length - 1, 'three-cols-wrapper')}
        </div>
    );
};

export default Team;
