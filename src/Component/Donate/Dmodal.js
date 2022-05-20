import React from 'react'
import './donate.css'
import {saveAs} from 'file-saver'

const Dmodal = () => {
    function handleclick() {
            saveAs('image_url', 'image.jpg') // Put your image url here.
    }
    return (
        <div>
            <span className='donate-banner'>Even a little is enough for happiness.</span>
            {/* Button trigger modal  */}
            <div >
                <button type="button" id='dn-mod-btn' className="btn DON-BTN" data-bs-toggle="modal" data-bs-target="#donatemodal">
                    MAKE DONATION
                </button>
            </div>

            {/* Modal */}
            <div className="modal fade" id="donatemodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                
                <div className="modal-dialog modal-dialog-centered">
                    <div style={{ background: "rgba(200,200,200, 0.8)" }} className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div className='qrholder' download onClick={handleclick}></div>
                            <div className='upiid'>
                                123456789@ibl
                                
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dmodal