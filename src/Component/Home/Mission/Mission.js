import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/Home/Mission/1.jpg'
import img2 from '../../../assets/Home/Mission/2.jpg'
import img3 from '../../../assets/Home/Mission/3.jpg'

const Mission = () => {
    function handleMision() {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }
    console.log("hellow");
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 mission-text" >
                    {/* <h1>OUR MISSION</h1> */}
                    <h1>Gallery</h1>
                    {/* <p>Samarpan ensures that every child is given the right to learn and prosper</p> */}
                    <Link onClick={handleMision} className="mission-button" style={{ textDecoration:'none' }} to='/galery'>VIEW ALL</Link>
                </div>
                <div className="col-lg-6 p-0 mission-carousel">
                    {/* carousel */}
                    <div id="carouselmissionFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="1500" data-bs-pause="hover">
                        <div className="carousel-inner-mission">
                            <div className="carousel-item active" style={{ backgroundImage: "url(" + img1 + ")" }}>
                            </div>
                            <div className="carousel-item" style={{ backgroundImage: "url(" + img2 + ")" }}>
                            </div>
                            <div className="carousel-item" style={{ backgroundImage: "url(" + img3 + ")" }}>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselmissionFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselmissionFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Mission