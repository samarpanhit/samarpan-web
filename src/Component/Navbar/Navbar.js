import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/logo.png'
import Alert from './Alert'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <Alert/>
    <section id="title">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="#" className="navbar-brand">
          <img className="logo" src={image1} alt="" />
        </Link>
        <button className='a-c'>
            DONATE
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#samarpanTitle" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="samarpanTitle">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/'>HOME </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>ABOUT US </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/galery'>GALERY </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/team'>TEAM </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contact-us'>CONTACT US </Link>
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