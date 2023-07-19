import React, { useEffect, useState } from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-page'>

      <h1 className="contact-head">CONTACT US</h1>
      <div className="row">

        {/* instagram */}
        <div className="contact-box col-lg-4">
          <a href="#">
            <a href='https://www.instagram.com/samarpan_hit/' target="_blank">
              <i className="fa-brands fa-instagram fa-customise contact-icon" />
              <h3>INSTAGRAM</h3>
            </a>
          </a>
          <a href='https://www.instagram.com/samarpan_hit/' target="_blank">
            <p>@samarpan_hit</p>
          </a>
        </div>

        {/* facebook */}
        <div className="contact-box col-lg-4">
          <a href='https://www.facebook.com/samarpanathith' target="_blank">
            <i className="fa-brands fa-facebook-f fa-customise contact-icon" />
            <h3>FACEBOOK</h3>
          </a>
          <a href='https://www.facebook.com/samarpanathith' target="_blank"><p>@samarpanathith</p></a>
        </div>

        {/* linkedin */}
        <div className="contact-box col-lg-4">
          <a href="https://www.linkedin.com/company/samarpanhit">
            <i className="fa-brands fa-linkedin fa-customise contact-icon" />
            <h3>LINKEDIN</h3>
          </a>
          <a href='https://www.linkedin.com/company/samarpanhit' target='_blank'>
            <p>@samarpanhit</p>
          </a>
        </div>
      </div>

      {/* LOCATION */}
      <div className="row">
        <div className="contact-box col-lg-6">
          <a href="https://www.google.com/maps/place/Haldia+Institute+of+Technology/@22.0480855,88.0828135,14.31z/data=!4m5!3m4!1s0x3a02f0bd0fcacc69:0x409c7ac845fe6280!8m2!3d22.0505921!4d88.0722126?hl=en" target='_blank'>
            <i className="fa-solid fa-location-dot fa-customise contact-icon" />
            <h3>LOCATION</h3>
          </a>
          <p>Haldia institute of technology, Haldia, West bengal, 721657</p>
        </div>
        {/* Email */}
        <div className="contact-box col-lg-6">
          <a href='mailto:hithaldia.samarpan@gmail.com'>
            <i className="fa-solid fa-envelope fa-customise contact-icon" />
            <h3>EMAIL</h3>
          </a>
          <a href='mailto:hithaldia.samarpan@gmail.com'>
            <p>hithaldia.samarpan@gmail.com</p></a>
        </div>
      </div>
    </div>
  )
}

export default Contact