import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
      <div>
            <img src="./assets/images/renacer1.webp" alt="Residencial Renacer Sayago entrada" />
          </div>
          <div>
            <img src="./assets/images/renacer2.webp" alt="Residencial Renacer Sayago cuartos" />
          </div>
          <div>
            <img src="./assets/images/renacer3.webp" alt="Residencial Renacer Sayago sala" />
          </div>
          <div>
            <img src="./assets/images/renacer4.webp" alt="Residencial Renacer Sayago jardin exterior" />
          </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;