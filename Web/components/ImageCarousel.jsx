// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "./assets/images/renacer-banner.webp",
    thumbnail: "./assets/images/renacer-banner.webp",
  },
 
  {
    original: "./assets/images/renacer16.jpeg",
    thumbnail: "./assets/images/renacer16.jpeg",
  },
  {
    original: "./assets/images/renacer17.jpeg",
    thumbnail: "./assets/images/renacer17.jpeg",
  },
  {
    original: "./assets/images/t1.jpeg",
    thumbnail: "./assets/images/t1.jpeg",
  },
  {
    original: "./assets/images/t2.jpeg",
    thumbnail: "./assets/images/t2.jpeg",
  },
  {
    original: "./assets/images/g2.webp",
    thumbnail: "./assets/images/g2.webp",
  },
  {
    original: "./assets/images/g3.webp",
    thumbnail: "./assets/images/g3.webp",
  },
  {
    original: "./assets/images/m10.webp",
    thumbnail: "./assets/images/m10.webp",
  },
  {
    original: "./assets/images/g4.webp",
    thumbnail: "./assets/images/g4.webp",
  },
  {
    original: "./assets/images/m3.webp",
    thumbnail: "./assets/images/m3.webp",
  },
  {
    original: "./assets/images/m4.webp",
    thumbnail: "./assets/images/m4.webp",
  },
];

function ImageCarousel() {
  return (
    <div className="about">
      <div className="about-intro section-intro">
        <h2 className="h3 section-title margin">Explora Nuestros Espacios </h2>
        <p className="section-text margin">
          En nuestros residenciales, ofrecemos ambientes confortables y acogedores
          diseñados para el bienestar de nuestros residentes. Explora nuestras
          instalaciones y descubre los espacios que hacen de nuestro hogar un
          lugar especial para vivir.
        </p>
      </div>
      <div className="carousel-card margin">
        <ImageGallery
          items={images}
          autoPlay={true}
          renderItem={(item) => (
            <div className="image-container">
              <img src={item.original} alt="" />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default ImageCarousel;
