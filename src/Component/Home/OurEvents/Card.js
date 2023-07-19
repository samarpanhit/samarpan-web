import React from 'react'
import { Link } from 'react-router-dom'
import Readmore from './Readmore'


const Card = ({ title, date, contents, id, image }) => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behaviour: 'auto'
    })
  }
  // var temp = require('../../../assets/events/'+id+'.jpg')
  return (
    <div className='event-card'>
      {/* <div className='upper' style={{backgroundImage: 'url('+temp+')'}}> */}
      <div className='upper'>
        {console.log(image[0].original)}
        <img src={`${image[0].original}`} alt="eventImage"></img>
      </div>
      <div className='lower'>
        <h3>{title}</h3>
        <p className='event-date'>{date}</p>
        
        <p className='event-discrpt'><Readmore >{contents}</Readmore></p>
      </div>
      <Link to={`/event/${id}`}>  <button className='read-more-btn' onClick={scrollToTop}>Read more</button></Link>
    </div>
  )
}

export default Card

//    