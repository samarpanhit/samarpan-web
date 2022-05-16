import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };
    return (
        <footer>
            < div className="first" >
                <div className="first-item">
                    <span className='f-i-n'>342</span>
                    <span>Total</span>
                    <span>Teachers</span>
                </div>
                <div className="first-item">
                    <span className='f-i-n'>342</span>
                    <span>Total</span>
                    <span>Volunters</span>
                </div>
                <div className="first-item">
                    <span className='f-i-n'>342</span>
                    <span>Total</span>
                    <span>Students</span>
                </div>
                
            </div >
            <div class="second">
                <div class="second-item">
                    <h1>INFO</h1>
                    <ul>
                        <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/team" onClick={scrollToTop}>About us</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/galery" onClick={scrollToTop}>Gallery</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/team" onClick={scrollToTop}>Team</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/contact-us" onClick={scrollToTop}>Contact us</Link></li>
                    </ul>
                </div>

                <div class="second-item">
                    <h1>Contact Us</h1>
                    <p><i class="fa-solid fa-phone"></i><a href='telk:2441139'>1234567890</a></p>
                    <p><i class="fa-solid fa-envelope"></i> <a href='mailto:hithaldia.samarpan@gmail.com'>hithaldia.samarpan@gmail.com</a></p>
                </div>

                <div class="second-item">
                    <h1>Reach Us</h1>
                    <div class="reach-us">
                        <span ><a href='https://www.facebook.com/samarpanathith' target='_blank'>
                            <i class="fa-brands fa-facebook-f fa-2x"/>
                        </a></span>
                        <span style={{ marginLeft: "25px" }}><a href='https://www.instagram.com/samarpan_hit/'>
                            <i class="fa-brands fa-instagram fa-2x" target='_blank'></i>
                        </a></span>
                        
                    </div>
                    <p class="copyright">Copyright &copy; 2022 by Samarpan</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer