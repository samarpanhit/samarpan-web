import React from 'react'
import './ourevents.css'
import Card from '../Home/OurEvents/Card'
import Events_db from'../../Database/Events_db.json'

const Events = () => {
  return (
    <div className='event-page'>
      <h1>OUR EVENTS</h1>
      <div className='event-details'>
      {Events_db.reverse().map((item, i) => <Card title={item.title} date={item.date} contents={item.contents} id={item.id}/>)}
      </div>
    </div>
  )
}

export default Events