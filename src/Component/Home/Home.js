import React from 'react'
import './home.css'
import ImageSlider from './ImageSlider'

const Home = () => {
    return (
        <div>
            <ImageSlider />

            <div className='banner_top'>
                <span style={{ fontSize: "8vw", fontFamily: 'Permanent Marker, cursive' }}>SAMARPAN</span>
                <span style={{ fontSize: "2rem", fontFamily: 'Dancing Script, cursive' }}>EK SOCH EK BISWAS</span>
                <button className='vision_btn_banner'>OUR VISION</button>
            </div>
            
        </div>
    )
}

export default Home