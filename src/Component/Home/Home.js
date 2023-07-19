import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";
import './home.css'
import FallbackRender from '../ErrorBoundary';

// import Vision from './Vision/Vision'
const Mission = lazy(() => import("./Mission/Mission"));
const ImageSlider = lazy(() => import("./ImageSlider"));
const Ourevents = lazy(() => import("./OurEvents/Ourevents"));
// import Mission from './Mission/Mission'
// import ImageSlider from './ImageSlider'
// import Ourevents from './OurEvents/Ourevents'

const Home = () => {
    return (
        <div>
            <ErrorBoundary
                FallbackComponent={FallbackRender}
                onReset={(details) => {
                    // Reset the state of your app so the error doesn't happen again
                }}
            >
                <Suspense fallback={<div>Loading....</div>}>
                    <ImageSlider />

                    <div className='banner_top'>
                        <span className='b-t-h'>SAMARPAN</span>
                        <span className='b-t-c'>EK SOCH, EK VISWAS</span>
                        <Link to='/about' className='vision_btn_banner' style={{ textDecoration: "none" }}>About Us</Link>
                    </div>

                    <div className='social-msg'>
                        <h1>ALL CHILDREN DESERVE AN OPPORTUNITY TO SUCCEED IN LIFE</h1>
                        <p>An NGO of Haldia Institute of Technology.<br></br>
                            Marching forward with the thirst of providing free primary education to the needy children of nearby areas.</p>
                    </div>

                    <Mission />
                    {/* <Vision bgcolor="white" /> */}

                    <Ourevents />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default Home