import React from 'react'
import image1 from '../../assets/logo.png'
import Alert from './Alert'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <Alert/>
    <section id="title">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" class="navbar-brand">
          <img class="logo" src={image1} alt="" />
        </a>
        <button className='a-c'>
            DONATE
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#samarpanTitle" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="samarpanTitle">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">GALERY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TEAM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
        <button className='b-c'>
          DONATE
        </button>
      </nav>
    </section>
    </>
  )
}

export default Navbar