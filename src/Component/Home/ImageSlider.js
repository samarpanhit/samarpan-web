import React from 'react'
import './home.css'
import imagelink from '../../Database/Galery/image_slider.json'

import img1 from '../../assets/Home/slider/1.jpg'
import img2 from '../../assets/Home/slider/2.jpg'
import img3 from '../../assets/Home/slider/3.jpg'
import img4 from '../../assets/Home/slider/4.jpg'
import img5 from '../../assets/Home/slider/5.jpg'
import img6 from '../../assets/Home/slider/6.jpg'


const ImageSlider = () => {
    return (
        <div className='container-fluid p-0'>
            <div id="carouselExampleIndicators" className="carousel slide lazy-load" data-bs-ride="carousel" data-bs-interval="2000" data-bs-pause="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                        <div className="carousel-item active" style={{ backgroundImage: "url(" + img1 + ")" }}>
                            <div className='overlay'></div>
                        </div>
                    <div className="carousel-item" style={{ backgroundImage: "url(" + img2 + ")" }}>
                        <div className='overlay'></div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: "url(" + img3 + ")" }}>
                        <div className='overlay'></div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: "url(" + img4 + ")" }}>
                        <div className='overlay'></div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: "url(" + img5 + ")" }}>
                        <div className='overlay'></div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: "url(" + img6 + ")" }}>
                        <div className='overlay'></div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default ImageSlider