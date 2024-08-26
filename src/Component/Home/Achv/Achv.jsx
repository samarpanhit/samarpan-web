import React from 'react';
import './Achv.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi"; // Importing the closing quotation icon
import Img from '../../../assets/Team/core/t-3.jpg';
import ImgR from '../../../assets/Team/core/anurag.jpg';

function Achv() {
  const achievements = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad facere dolor soluta eaque a tenetur sit. Commodi magni iure id hic repudiandae? Error cumque, velit aliquam ullam aut similique?",
      image: Img
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad facere dolor soluta eaque a tenetur sit. Commodi magni iure id hic repudiandae? Error cumque, velit aliquam ullam aut similique?"
      ,
      image: ImgR
    }
  ];

  return (
    <Carousel>
      {achievements.map((achievement, index) => (
        <Carousel.Item key={index}>
          <div className="slide-section d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="image-container">
                    <img src={achievement.image} alt="Achievement" className="styled-image" />
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <p className="slide-description">
                  <BiSolidQuoteAltLeft  className="quote-icon" /> {/* Opening quotation icon */}
                    {achievement.description}
                    <BiSolidQuoteAltRight className="quote-icon-right" /> {/* Closing quotation icon */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Achv;
