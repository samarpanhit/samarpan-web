import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name,year}) => {
  return (
    <div className='card'>
      <span className='name'>{year - 4}-{year}</span>
      <Link to={`${year}`} >view all</Link>
      <div className='year'>{name}</div>
    </div>
  )
}

export default Card