import React from 'react'
import './ourevents.css'
import Card from '../Home/OurEvents/Card'
import Events_db from'../../Database/Events_db.json'
import { useState } from 'react'
import { useEffect } from 'react'

const Events = () => {
  const [data, setData] = useState()
  const [image, setImage] = useState()

  const url = 'https://script.google.com/macros/s/AKfycbzDoAKssNY1qVOIM262kKP0q30Jy9x0J1vOnW9So8Xvvas6hVVDmg36hIZBzoaVFnrL5w/exec'
  async function getData() {
    var fdata = await fetch(url);
    fdata = await fdata.json();
    setData(fdata.data);
    setImage(fdata.image);
  }
  useEffect(() => {
    getData();
    console.log(image);
  }, [])
  return (
    <div className='event-page'>
      <h1>OUR EVENTS</h1>
      <div className='event-details'>
        {/* {Events_db.map((item, i) => <Card title={item.title} date={item.date} contents={item.contents} id={item.id} image={item.image[0].original} />)} */}
        {
        !data?
        "Loading"
        :
            data.map((item, i) => <Card title={item.title} date={item.date} contents={item.contents} id={item.id}  image={image[i]}/>)
        
        }
      </div>
    </div>
  )
}

export default Events