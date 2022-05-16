import React from 'react'
import './home.css'
import ImageSlider from './ImageSlider'

const Home = () => {
    return (
        <div>
            <ImageSlider />
            <div className='banner_top'>
                <span style={{ fontSize: "8vw", fontFamily: 'Permanent Marker, cursive' }}>SAMARPAN</span>
                <span style={{ fontSize: "2rem", fontFamily: 'Dancing Script, cursive' }}>EK SOCH EK BISWAS</span>
                <button className='vision_btn_banner'>OUR VISION</button>
            </div>


            {/* footer */}
            <div className="first">
                <div className="first-item">
                    <h1>342</h1>
                    <p>total</p>
                    <p>students</p>
                </div>
                <div className="first-item">
                    <h1>234</h1>
                    <p>students</p>
                    <p>in school</p>
                </div>
                <div className="first-item">
                    <h1>643</h1>
                    <p>students</p>
                    <p>in high school</p>
                </div>
                <div className="first-item">
                    <h1>342</h1>
                    <p>students</p>
                    <p>in vocational school</p>
                </div>
                <div className="first-item">
                    <h1>342</h1>
                    <p>students</p>
                    <p>in university</p>
                </div>
            </div>
            <div class="second">
                <div class="second-item">
                    <h1>INFO</h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">About us</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Gallery</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Team</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>

                <div class="second-item">
                    <h1>Contact Us</h1>
                    <p><i class="fa-solid fa-phone"></i> 1234567890</p>
                    <p><i class="fa-solid fa-envelope"></i> info@teachachild.org</p>
                </div>

                <div class="second-item">
                    <h1>Reach Us</h1>
                    <div class="reachu-us">
                        <a href="#">
                            <i class="fa-brands fa-facebook-f fa-2x"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-instagram fa-2x"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-twitter fa-2x"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-youtube fa-2x"></i>
                        </a>
                    </div>
                    <p class="copyright">Copyright &copy; 2022 by Samarpan</p>
                </div>
            </div>
        </div>
    )
}

export default Home