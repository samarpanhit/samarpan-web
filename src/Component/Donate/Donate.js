import React from 'react'
import Dmodal from './Dmodal'
import './donate.css'

const Donate = () => {
  return (
    <div className='donate'>
      <div style={{ background: "rgba(0,0,0,0.5)", height: '100%', width: '100%' }}>
        <span className='donate-banner'>Even a little is enough for happiness.</span>

        {/* <Dmodal/> */}
        <a href='https://forms.gle/qBr9Qo2rU3Y1ctEZA' target='_blank'>
          <button type="button" id='dn-mod-btn' className="btn DON-BTN" data-bs-toggle="modal" data-bs-target="#donatemodal">
            MAKE DONATION
            
          </button>
        </a>
      </div>

    </div>
  )
}

export default Donate