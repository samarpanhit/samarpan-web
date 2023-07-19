import React from 'react'
import { useParams } from 'react-router';
import Events_db from '../../../Database/Events_db.json'
import './eventfullpage.css'
import SimpleImageSlider from "react-simple-image-slider";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import { useEffect } from 'react';
import { useState } from 'react';

const EventsFullPage = () => {
  const temp = useParams()
  const [data, setData] = useState()
  const [image, setImage] = useState()
  const url = `https://script.google.com/macros/s/AKfycbzDoAKssNY1qVOIM262kKP0q30Jy9x0J1vOnW9So8Xvvas6hVVDmg36hIZBzoaVFnrL5w/exec?id=${temp.id}`

  async function getData() {
    var fdata = await fetch(url);
    fdata = await fdata.json();
    setData(fdata.data[0]);
    setImage(fdata.image[0]);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
    {
    !data?
        "Loading"
        :
        < div className='Event' >
          <ImageGallery
            items={image}
            // showThumbnails={false}
            showPlayButton={false}
            showBullets={true}
            lazyLoad={true}
          />
          <div className='event-info'>
            check
            <p className='event-date'>{data.date}</p>
            <h3 className='event-title'>{data.title}</h3>
            {/* <p className='event-data'>{data.contents}</p> */}
            <p className='event-data'>{data.contents}</p>
          </div>
        </div >
      }
    </div>
  )
}

export default EventsFullPage
