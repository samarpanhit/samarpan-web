import React, { useRef } from 'react'
import './galery.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const images = [
    { url: require("./1.jpg") },
    { url: require("./2.jpg") },
    { url: require("./3.jpg") },
    { url: require("./4.jpg") },
    { url: require("./5.jpg") },
    { url: require("./6.jpg") }
];

const image1 = { url: require("./1.jpg") }

const Gcard = () => {
    const gal = useRef(null)
    function handleClick() {
        gal.current.click()
    }
    return (
        <div className='galery-card'>
            <div className='g-c-t' onClick={handleClick}></div>
            <div className='g-c-b'>
                LOREM IPSUM
            </div>

            {/* Button trigger modal  */}
            <div >
                <button ref={gal} type="button" id='dn-mod-btn' className="btn" data-bs-toggle="modal" data-bs-target="#gal-modal" style={{ display: "none" }}></button>
            </div>

            {/* Modal */}
            <div className="modal fade" id="gal-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" >
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gcard
