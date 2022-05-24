import React from 'react'
import Card from './Card'
import './team.css'
import core_member from '../../Database/Team/Core_member.json'

const Team = () => {
    return (
        <div className='team-container'>
            <h1>TEAM</h1>
            <div className='team-content'>
                {core_member.map((member, i) => <Card name={member.name} role={member.role} id={member.id} />)}        
            </div>
        </div>
    )
}
export default Team
