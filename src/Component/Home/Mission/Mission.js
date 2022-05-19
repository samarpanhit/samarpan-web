import React from 'react'
import img1 from '../../../assets/slider/1.jpg'
import img2 from '../../../assets/slider/2.jpg'
import img3 from '../../../assets/slider/3.jpg'

const Mission = (props) => {
    const {bgcolor} = props
    console.log(bgcolor);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0 mission-carousel">
                    {/* carousel */}
                    <div id="carouselmissionFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner-mission">
                            <div class="carousel-item active" style={{ backgroundImage: "url(" + img1 + ")" }}>
                            </div>
                            <div class="carousel-item" style={{ backgroundImage: "url(" + img2 + ")" }}>
                            </div>
                            <div class="carousel-item" style={{ backgroundImage: "url(" + img3 + ")" }}>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselmissionFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselmissionFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 mission-text" style={{ background: bgcolor}}>
                    <h1>OUR MISSION</h1>
                    <p>Samarpan ensures that every child is given the right to learn and prosper</p>
                    <button type="button" className="mission-button" style={{ background: bgcolor }} target="#">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Mission