import React from 'react'
import './home.css'
import ImageSlider from './ImageSlider'
import slideimg1 from '../../assets/slider/1.jpg'
import slideimg2 from '../../assets/slider/2.jpg'
import slideimg3 from '../../assets/slider/3.jpg'
import Mission from './Mission/Mission'
import Vision from './Vision/Vision'
import Ourevents from './Ourevents'

const Home = () => {
    return (
        <div>
            <ImageSlider />

            <div className='banner_top'>
                <span style={{ fontSize: "8vw", fontFamily: 'Permanent Marker, cursive' }}>SAMARPAN</span>
                <span style={{ fontSize: "2rem", fontFamily: 'Dancing Script, cursive' }}>EK SOCH, EK VISWAAS</span>
                <button className='vision_btn_banner'>OUR VISION</button>
            </div>

            <div style={{height:"80vh", width:'100vw'}}>
                <h1>What is Lorem Ipsum?</h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>

            <Mission bgcolor="#882601" />
            <Vision bgcolor="#062f4f" />

            <Ourevents/>
        </div>
    )
}

export default Home