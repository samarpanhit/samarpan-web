import React from 'react'
import { Link } from 'react-router-dom'
import Events_db from '../../../Database/Events_db.json'

import Card from './Card'
const Ourevents = () => {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }
  return (
    <div className='ourevents'>
      <h1>OUR EVENTS</h1>
      <div className='event-content'>
        {Events_db.slice(0,3).reverse().map((item,i)=> <Card title={item.title} date={item.date} contents={item.contents} id={item.id}/>)}

      </div>
      <Link to='/event'><button type='button' className='event-button' onClick={handleClick}>READ MORE</button></Link>
    </div>
  )
}

export default Ourevents