import React from 'react'
import image from '../../assets/404.jpg'
import './error.css'

const Error = () => {
    return (
        <div className='error' style={{backgroundImage:"url("+image+")"}}>
        </div>
    )
}

export default Error