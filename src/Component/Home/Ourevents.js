import React from 'react'
import img1 from '../../assets/slider/1.jpg'
const Ourevents = () => {
  return (
    <div className='ourevents'>
      <h1>OUR MISSION</h1>
      <div className='event-card'>
        <div className='upper' style={{ backgroundImage: "url(" + img1 + ")" }}>
        </div>
        <div className='lower'>
          <h3>creatzing participation of samarpan students</h3>
          <p className='event-date'>25 june 2022</p>
          <p className='event-discrpt'>samarpan is organising online and offline event called creatzing</p>
        </div>
      </div>
      <button type='button' className='event-button' target="#">READ MORE</button>
    </div>
  )
}

export default Ourevents