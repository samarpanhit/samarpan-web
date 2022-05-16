import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='container'>
      
        <h1 className="contact-head">CONTACT US</h1>
        <div className="row">
          <div className="contact-box col-lg-4">
            <a href="#">
              <i className="fa-solid fa-location-dot fa-3x contact-icon"></i>
            </a>
            <h3>LOCATION</h3>
            <p>Haldia institute of technology, Haldia, West bengal, 721657</p>
          </div>
          <div className="contact-box col-lg-4">
            <a href="#">
              <i className="fa-solid fa-envelope fa-3x contact-icon"></i>
            </a>
            <h3>EMAIL</h3>
            <p>hithaldia.samarpan@gmail.com</p>
          </div>
          <div className="contact-box col-lg-4">
            <a href="#">
              <i className="fa-brands fa-telegram fa-3x contact-icon"></i>
            </a>
            <h3>TELEGRAM</h3>
            <p>t.me/samarpan</p>
          </div>
        </div>
        <div className="row">
          <div className="contact-box col-lg-4">
            <a href="#">
              <i className="fa-brands fa-instagram fa-3x contact-icon"></i>
            </a>
            <h3>INSTAGRAM</h3>
            <p>@samarpan_hit</p>
          </div>
          <div className="contact-box col-lg-4">
            <a href="#">
              <i className="fa-brands fa-facebook-f fa-3x contact-icon"></i>
            </a>
            <h3>FACEBOOK</h3>
            <p>@samarpan_hith</p>
          </div>
          <div className="contact-box col-lg-4">
            <a href="#">
              <i className="fa-brands fa-linkedin fa-3x contact-icon"></i>
            </a>
            <h3>LINKEDIN</h3>
            <p>@samarpan_hit</p>
          </div>
        </div>
      
    </div>
  )
}

export default Contact