import React from 'react'
import './home.css'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
const Home = () => {
  return (
    <div className='container-fluid'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500"> 
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
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
            <div className="carousel-item active">
                <img className="car-img" src={img1} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img className="car-img" src={img2} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img className="car-img" src={img3} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img className="car-img" src={img4} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img className="car-img" src={img5} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img className="car-img" src={img6} class="d-block w-100" alt="..." />
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

export default Home