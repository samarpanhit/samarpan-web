import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Footer = () => {

    const [didViewCountUp, setDidViewCountUp] = useState(false)
    function onVisibilityChange(isVisible){
        if (isVisible) {
            setDidViewCountUp({ didViewCountUp: true });
        }
    }
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
                    <span className='f-i-n'>
                        <VisibilitySensor onChange={onVisibilityChange} offset={{
                            top:
                                10
                        }} delayedCall>
                            <CountUp start={0} end={didViewCountUp ? 153 : 0} duration={3} />
                        </VisibilitySensor>
                    </span>
                    <span>Total</span>
                    <span>Teachers</span>
                </div>
                <div className="first-item">
                    <span className='f-i-n'>
                        <VisibilitySensor onChange={onVisibilityChange} offset={{
                            top:
                                10
                        }} delayedCall>
                            <CountUp start={0} end={didViewCountUp ? 160 : 0} duration={3} />
                        </VisibilitySensor>
                    </span>
                    <span>Total</span>
                    <span>Volunteers</span>
                </div>
                <div className="first-item">
                    <span className='f-i-n'>
                        <VisibilitySensor onChange={onVisibilityChange} offset={{
                            top:
                                10
                        }} delayedCall>
                            <CountUp start={0} end={didViewCountUp ? 31 : 0} duration={3} />
                        </VisibilitySensor>
                    </span>
                    <span>Total</span>
                    <span>Students</span>
                </div>
                
            </div >
            <div className="second">
                <div className="second-item">
                    <h1>INFO</h1>
                    <ul>
                        <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/about" onClick={scrollToTop}>About us</Link></li>
                    </ul>
                    {/* <ul>
                        <li><Link to="/galery" onClick={scrollToTop}>Gallery</Link></li>
                    </ul> */}
                    <ul>
                        <li><Link to="/team" onClick={scrollToTop}>Team</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/contact-us" onClick={scrollToTop}>Contact us</Link></li>
                    </ul>
                </div>

                <div className="second-item">
                    <h1>Contact Us</h1>
                    <p><i className="fa-solid fa-phone fa-customise"></i><a href='tel:+918621893990'> Anurag Jha: +918621893990</a></p>
                    <p><i className="fa-solid fa-phone fa-customise"></i><a href='tel:+919155633724'> Biwesh Kumar: +919155633724</a></p>
                    <p><i className="fa-solid fa-phone fa-customise"></i><a href='tel:+918759377656'> Protik Sarkar: +918759377656</a></p>
                    <p><i className="fa-solid fa-envelope fa-customise"></i> <a href='mailto:hithaldia.samarpan@gmail.com'>hithaldia.samarpan@gmail.com</a></p>
                </div>

                <div className="second-item">
                    <h1>Reach Us</h1>
                    <div className="reach-us">
                        <span ><a href='https://www.facebook.com/samarpanathith' target='_blank' rel="noreferrer">
                            <i className="fa-brands fa-facebook-f fa-2x"/>
                        </a></span>
                        <span style={{ marginLeft: "25px" }}><a href='https://www.instagram.com/samarpan_hit/' target='_blank' rel="noreferrer">
                            <i className="fa-brands fa-instagram fa-2x" target='_blank'></i>
                        </a></span>
                        <span style={{ marginLeft: "25px" }}><a href='https://www.linkedin.com/company/samarpanhit' target='_blank' rel="noreferrer">
                            <i className="fa-brands fa-linkedin fa-2x" target='_blank'></i>
                        </a></span>
                        
                    </div>
                    <p className="copyright">Copyright &copy; 2022 by Samarpan</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
