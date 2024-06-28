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
          <img src="./assets/images/test1.jpeg" alt="Image 1" />
        </div>
        <div>
          <img src="./assets/images/test1.jpeg" alt="Image 2" />
        </div>
        <div>
          <img src="./assets/images/test1.jpeg" alt="Image 3" />
        </div>
        <div>
          <img src="./assets/images/test1.jpeg" alt="Image 4" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;