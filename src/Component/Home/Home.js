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
                <h1>ALL CHILDREN DESERVE AN OPPORTUNITY TO SUCCEED IN LIFE</h1>
                <p>An NGO of Haldia Institute of Technology.<br></br>
                    Marching forward with the thirst of providing free primary education to the needy children of nearby areas.</p>
            </div>

            <Mission bgcolor="white" />
            <Vision bgcolor="white" />

            <Ourevents/>
        </div>
    )
}

export default Home