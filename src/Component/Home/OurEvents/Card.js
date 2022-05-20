import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/slider/1.jpg'
import Readmore from './Readmore'

const Card = (props) => {
  const { title, date, contents } = props
  return (
    <div className='event-card'>
      <div className='upper' style={{ backgroundImage: "url(" + img1 + ")" }}></div>
      <div className='lower'>
        <h3>{title}</h3>
        <p className='event-date'>{date}</p>
        
        <p className='event-discrpt'><Readmore >{contents}</Readmore></p>
        <Link to={props.id}><button className='read-more-btn' >Read more</button></Link>
      </div>
    </div>
  )
}

export default Card