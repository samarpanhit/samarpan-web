import React from 'react'
import './home.css'
import ImageSlider from './ImageSlider'
import slideimg1 from '../../assets/slider/1.jpg'
import slideimg2 from '../../assets/slider/2.jpg'
import slideimg3 from '../../assets/slider/3.jpg'
const Home = () => {
    return (
        <div>
            <ImageSlider />

            <div className='banner_top'>
                <span style={{ fontSize: "8vw", fontFamily: 'Permanent Marker, cursive' }}>SAMARPAN</span>
                <span style={{ fontSize: "2rem", fontFamily: 'Dancing Script, cursive' }}>EK SOCH, EK VISWAAS</span>
                <button className='vision_btn_banner'>OUR VISION</button>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 mission-slide">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slideimg1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={slideimg2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={slideimg3} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 mission">
                        <h1>OUR MISSION</h1>
                        <p>Samarpan ensures that every child is given the right to learn and prosper</p>
                        <button type="button" className="mission-button" target="#">READ MORE</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home