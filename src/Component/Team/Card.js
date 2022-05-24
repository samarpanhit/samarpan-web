import React from 'react'

const Card = (props) => {
    const {name,role,id} = props
    var temp = require('../../assets/Team/core/'+id+'.jpg')
  return (
      <div className='team-card'>
          <div className='photo-holder' style={{ backgroundImage: 'url(' + temp + ')' }}></div>
          <span className='team-role'>{role}</span>
          <span className='team-name'>{name}</span>
      </div>
  )
}

export default Card