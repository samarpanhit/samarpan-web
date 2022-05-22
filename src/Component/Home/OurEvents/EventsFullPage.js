import React from 'react'
import { useParams } from 'react-router';
import Events_db from '../../../Database/Events_db.json'
import './eventfullpage.css'

const EventsFullPage = () => {
  const temp = useParams()
  var img1 = require('../../../assets/events/' + temp.id + '.jpg')

  return (
    <div>
      {Events_db.map((item, i) => (item.id === temp.id) &&
        < div className='Event' >
          <div className='event-pic' style={{ backgroundImage: "url(" + img1 + ")" }}>
          </div>
          <div className='event-info'>
            <p className='event-date'>{item.date}</p>
            <h3 className='event-title'>{item.title}</h3>
            <p className='event-data'>{item.contents}</p>
          </div>
        </div >
      )}
    </div>
  )
}

export default EventsFullPage
