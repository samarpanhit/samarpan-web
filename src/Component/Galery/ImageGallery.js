import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './Gcard.css';

const CustomImageGallery = ({ images, onClose }) => {
    const imageItems = images.map(image => ({
        original: image.imageUrl,
        thumbnail: image.imageUrl,
    }));

    return (
        <div className="image-gallery-overlay">
            <div className="close-button" onClick={onClose}>
                <i className="fa fa-times fa-2x fa-inverse"></i>
            </div>
            <ImageGallery items={imageItems} />
        </div>
    );
};

export default CustomImageGallery;
