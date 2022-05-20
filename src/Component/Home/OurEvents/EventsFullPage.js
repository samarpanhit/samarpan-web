import React from 'react'
import { useParams } from 'react-router';
import Events_db from '../../../Database/Events_db.json'
import img1 from '../../../assets/slider/1.jpg'
import './eventfullpage.css'
const EventsFullPage = () => {
  // console.log(window.location.pathname);
  
  return (
    <div>
      <div className='Event'>
        <div className='event-pic' style={{ backgroundImage: "url(" + img1 + ")" }}>
        </div>
        <div className='event-info'>
        <p className='date'>25 JUNE 2022</p>
        <h3>What is lorem ipsum</h3>
        <p className='event-data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  )
}

export default EventsFullPage