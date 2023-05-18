import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Events_db from '../../../Database/Events_db.json'

import Card from './Card'
const Ourevents = () => {
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
  }, [])

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
        {
          !data ?
            "Loading"
            :
            <>
            <Card title={data[0].title} date={data[0].date} contents={data[0].contents} id={data[0].id} image={image[0]}/>
            <Card title={data[1].title} date={data[1].date} contents={data[1].contents} id={data[1].id} image={image[1]}/>
            <Card title={data[2].title} date={data[2].date} contents={data[2].contents} id={data[2].id} image={image[2]}/>
            </>
        }

      </div>
      <Link to='/event'><button type='button' className='event-button' onClick={handleClick}>READ MORE</button></Link>
    </div>
  )
}

export default Ourevents