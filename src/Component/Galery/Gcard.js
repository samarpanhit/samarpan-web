import React, { useRef, useState } from 'react'
import './galery.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"


const Gcard = (props) => {
    const [images, setimages] = useState([])

    const { title, sub } = props

    {
        sub.map((item, i) =>
            // handlePush(i+1,item.description)
            images.push(item)

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
