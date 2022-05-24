import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/Home/Mission/1.jpg'
import img2 from '../../../assets/Home/Mission/2.jpg'
import img3 from '../../../assets/Home/Mission/3.jpg'

const Mission = (props) => {
    function handleMision() {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }
    const {bgcolor} = props
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0 mission-carousel">
                    {/* carousel */}
                    <div id="carouselmissionFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
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
                <div className="col-lg-6 mission-text" style={{ background: bgcolor}}>
                    <h1>OUR MISSION</h1>
                    <p>Samarpan ensures that every child is given the right to learn and prosper</p>
                    <Link onClick={handleMision} className="mission-button" style={{ background: bgcolor, textDecoration:'none' }} to='/about'>READ MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default Mission