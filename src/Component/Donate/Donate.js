import React from 'react'
import Dmodal from './Dmodal'
import './donate.css'

import qr from '../../assets/GoogleFormQR.png'
import rightImage from '../../assets/Home/Vision/2.jpg' 

const Donate = () => {

  return (
    <div className='donate-new'>

      {/*  Split Layout Section */}
      <section className="donate-top">
        <div className="donate-left">
          <h2>Education Transforms Lives</h2>
          <p>
            Millions of children in underserved communities are deprived of quality education.
            Your small contribution can empower them with books, learning materials, and a brighter future.
            <br /><br />
            Every rupee you donate builds classrooms, funds scholarships, and gives a child the hope they deserve.
          </p>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSf09XecxdMAJSaEYEFTUtFZ7lc5_ZzoAUOW8cg1OjIlKyX81A/viewform?usp=sharing&ouid=117367219460024092316' target='_blank'>
            <button type="button"  className="donate-btn" data-bs-toggle="modal" data-bs-target="#donatemodal">
              Donate Now
            </button>
          </a>
        </div>

        <div className="donate-right">
          <img src={rightImage} alt="Support Education" /> 
        </div>
      </section>

      {/*  QR Card Section */}
      <section className="qr-card-section">
        <div className="qr-card">
          <img src={qr} alt="Scan to Donate" className="qr-image" /> 
          <p className="qr-card-moto">Scan to donate us </p>
        </div>
      </section>

      {/* 📝 Quote Section */}
      <section className="donate-quote">
        <h3>"The best way to make a difference in the world is to invest in its children."</h3>
      </section>

    </div>
  )
}


export default Donate