<<<<<<< HEAD
import React from "react";
import "./galery.css";
import Gcard from "./Gcard";
import Galery_db from "../../Database/Galery/Galery_db.json";


const Galery = () => {
  return (
    <div className="galery">
      {/* {Galery_db.map((item, i) => <Gcard index={item.id} title={item.title} sub={item.sub}/>)}           */}
      Comming Soon..
      
    </div>
  );
};
=======
import React, { useState, useEffect } from 'react';
import Gcard from './Gcard';
import CustomImageGallery from './ImageGallery';
import './Gcard.css';
import Loader from '../Loader';

function Galery() {
    const [cards, setCards] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=5DzEDU6WLz58i7jLFvBG1-qhLSaHRrTaZgcgQLdqB7ClNAGJGha46nlu1xszf3nmdiACnF19aHUJSXpJ0zJsXrtIgp1dMKHHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOJOcK6R2vavbO61WLnF-_pATKug11jSMAPkY1iNncxkSMEqOMNy02c6X93FBlTmb9MWa4jAjxhZB8-4l64Q86zfvzGTtB5mrQ&lib=MXmyteYIH5mDyn4OoQwV8K_UpSJ62eWWl');
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching gallery data:', error);
            }
        };

        fetchCards();
    }, []);

    const handleCardClick = (card) => {
        console.log(`${card.id} has been Clicked`)
        setSelectedCard(card);
    };

    const handleCloseGallery = () => {
        console.log(`Card has been Closed`)
        setSelectedCard(null);
    };

    return (
      <div>
      <div className="heading">
          <h1>Gallery</h1>
      </div>

      <div className="gallery-container">
            {!cards ? (
                <Loader />
            ) : selectedCard ? (
                <CustomImageGallery images={selectedCard.images} onClose={handleCloseGallery} />
            ) : (
                cards.map(card => (
                    <Gcard
                        key={card.id}
                        images={card.images}
                        title={card.title}
                        onClick={() => handleCardClick(card)}
                    />
                ))
            )}
        </div>
  </div>
    );
}
>>>>>>> 8a66f74 (Add Galley Section)

export default Galery;
