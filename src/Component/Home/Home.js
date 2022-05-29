import React from 'react'
import './home.css'
import ImageSlider from './ImageSlider'

import Mission from './Mission/Mission'
import Vision from './Vision/Vision'
import Ourevents from './OurEvents/Ourevents'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <ImageSlider />

            <div className='banner_top'>
                <span className='b-t-h'>SAMARPAN</span>
                <span className='b-t-c'>EK SOCH, EK VISWAS</span>
                <Link to='/about' className='vision_btn_banner' style={{textDecoration: "none"}}>About Us</Link>
            </div>

            <div className='social-msg'>
                <h1>What is Lorem Ipsum?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <Mission bgcolor="#882601" />
            <Vision bgcolor="#062f4f" />

            <Ourevents/>
        </div>
    )
}

export default Home