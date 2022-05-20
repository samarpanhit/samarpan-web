import React from 'react'
import img1 from '../../assets/slider/1.jpg'

const Card = (props) => {
    const {name,role,img} = props
  return (
      <div className='team-card'>
          <div className='photo-holder' style={{ background:  'red'}}></div>
          <span className='team-role'>{role}</span>
          <span className='team-name'>{name}</span>
      </div>
  )
}

export default Card