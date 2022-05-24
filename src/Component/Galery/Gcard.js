import React, { useRef } from 'react'
import './galery.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"





const Gcard = (props) => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            description: 'Ghandhi nagar area'
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            description: 'Khudiramnagar'

        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            description: ''

        },
    ];
    const{title,id} = props
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
