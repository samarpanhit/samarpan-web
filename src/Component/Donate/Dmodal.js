import React from 'react'
import './donate.css'

const Dmodal = () => {
    return (
        <div>
            <span className='donate-banner'>Even a little is enough for happiness.</span>
            {/* Button trigger modal  */}
            <div >
                <button type="button" id='dn-mod-btn' class="btn DON-BTN" data-bs-toggle="modal" data-bs-target="#donatemodal">
                    MAKE DONATION
                </button>
            </div>

            {/* Modal */}
            <div class="modal fade" id="donatemodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                
                <div class="modal-dialog modal-dialog-centered">
                    <div style={{ background: "rgba(200,200,200, 0.8)" }} class="modal-content">
                        <div class="modal-header border-bottom-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div className='qrholder'></div>
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