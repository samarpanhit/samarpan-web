import React from 'react'
import { Link } from 'react-router-dom'
import Readmore from './Readmore'


const Card = (props) => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behaviour: 'auto'
    })
  }
  const { title, date, contents,id } = props
  var temp = require('../../../assets/events/'+id+'.jpg')
  console.log(id);
  return (
    <div className='event-card'>
      <div className='upper' style={{backgroundImage: 'url('+temp+')'}}>
      </div>
      <div className='lower'>
        <h3>{title}</h3>
        <p className='event-date'>{date}</p>
        
        <p className='event-discrpt'><Readmore >{contents}</Readmore></p>
      </div>
      <Link to={`${props.id}`}>  <button className='read-more-btn' onClick={scrollToTop}>Read more</button></Link>
    </div>
  )
}

export default Card

//    