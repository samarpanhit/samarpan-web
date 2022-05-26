import React, { useRef, useState } from 'react'
import './galery.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"


const Gcard = (props) => {
    const [images, setimages] = useState([])

    function handlePush(id,des){
        const obj = 
        {
            "original": `/Galery/${index}/${id}.jpg`,
            "description": des
        } 
        images.push(obj)
    }

    const { title, index, sub } = props

    {
        sub.map((item, i) =>
            handlePush(i+1,item.description)
        )
    }
    // console.log(images);
    return (
        <div className='gal-con'>
            <ImageGallery
                items={images}
                // showThumbnails={false}
                showPlayButton={false}
                showBullets={true}
            />
            <div className='gal-title'>{title}</div>
        </div>
    )
}

export default Gcard
