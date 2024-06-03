import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"; 
import './Gallery.css';

import firstPicture from './galleryImages/frontPart.jpg'
import bedroom1 from './galleryImages/bedroom1.jpg'
import shower from './galleryImages/shower.jpg'
import pool from './galleryImages/pool.jpg'
import kitchen from './galleryImages/kitchen.jpg'
import livingroom from './galleryImages/livingroom.jpg'
import mainentrance1 from './galleryImages/mainentrance.jpg'
import bedroom2 from './galleryImages/bedroom2.jpg'
import grass1 from './galleryImages/grass.jpg'
import bathroom1 from './galleryImages/bathroom.jpg';
import mainentrance2 from './galleryImages/mainentrance2.jpg'
import outdoorsitting from './galleryImages/outdoorsitting.jpg'
import grass2 from './galleryImages/grass2.jpg'
import grass3 from './galleryImages/grass3.jpg'
import cars from './galleryImages/cars.jpg'
import outdoorgite from './galleryImages/outdoorgite.jpg'
import bedroom1_2 from './galleryImages/bedroom1_2.jpg'
import outdoorgite2 from './galleryImages/outdoorgite2.jpg'
import bedroom1_3 from './galleryImages/bedroom1_3.jpg'
import bbqroom from './galleryImages/bbqroom.jpg'
import bedroom2_2 from './galleryImages/bedroom2_2.jpg'
import grass4 from './galleryImages/grass4.jpg'
import grass5 from './galleryImages/grass5.jpg'

function Gallery() {
  const images = [
    {
      original: firstPicture,
      thumbnail: firstPicture
    },
    {
      original: bedroom1,
      thumbnail: bedroom1
    },
    {
      original: shower,
      thumbnail: shower
    },
    {
      original: pool,
      thumbnail: pool
    },
    {
      original: kitchen,
      thumbnail: kitchen
    },
    {
      original: livingroom,
      thumbnail: livingroom
    },
    {
      original: mainentrance1,
      thumbnail: mainentrance1
    },
    {
      original: bedroom2,
      thumbnail: bedroom2
    },
    {
      original: grass1,
      thumbnail: grass1
    },
    {
      original: bathroom1,
      thumbnail: bathroom1
    },
    {
      original: mainentrance2,
      thumbnail: mainentrance2
    },
    {
      original: outdoorsitting,
      thumbnail: outdoorsitting
    },
    {
      original: grass2,
      thumbnail: grass2
    },
    {
      original: grass3,
      thumbnail: grass3
    },
    {
      original: cars,
      thumbnail: cars
    },
    {
      original: outdoorgite,
      thumbnail: outdoorgite
    },
    {
      original: bedroom1_2,
      thumbnail: bedroom1_2
    },
    {
      original: outdoorgite2,
      thumbnail: outdoorgite2
    },
    {
      original: bedroom1_3,
      thumbnail: bedroom1_3
    },
    {
      original: bbqroom,
      thumbnail: bbqroom
    },
    {
      original: bedroom2_2,
      thumbnail: bedroom2_2
    },
    {
      original: grass4,
      thumbnail: grass4
    },
    {
      original: grass5,
      thumbnail: grass5
    },
    
  ];

  return (
    <div className="gallery-container">  
      <ImageGallery items={images} showFullscreenButton={false}/> 
    </div>
  );
}

export default Gallery;
