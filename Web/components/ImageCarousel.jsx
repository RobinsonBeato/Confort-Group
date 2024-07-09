// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React from "react";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "./assets/images/renacer1.webp",
    thumbnail: "./assets/images/renacer1.webp",
  },
  {
    original: "./assets/images/renacer2.webp",
    thumbnail: "./assets/images/renacer2.webp",
  },
  {
    original: "./assets/images/renacer3.webp",
    thumbnail: "./assets/images/renacer3.webp",
  },
  {
    original: "./assets/images/renacer4.webp",
    thumbnail: "./assets/images/renacer4.webp",
  },
  {
    original: "./assets/images/renacer4.webp",
    thumbnail: "./assets/images/renacer4.webp",
  },
  {
    original: "./assets/images/renacer4.webp",
    thumbnail: "./assets/images/renacer4.webp",
  },
];

function ImageCarousel() {
  {
    return (
      <div className="about">
        <div className="about-intro section-intro">



          

          <h2 className="h3 section-title margin">Explora Nuestros Espacios </h2>

          <p className="section-text margin">
            En nuestras residencias, ofrecemos ambientes confortables y acogedores
            diseñados para el bienestar de nuestros residentes. Explora nuestras
            instalaciones y descubre los espacios que hacen de nuestro hogar un
            lugar especial para vivir.
          </p>

          {/* <div className="btn-group">
                        <button className="btn btn-secondary">Hire me</button>

                        <button className="btn btn-primary">Download cv</button>
                    </div> */}

        </div>
        <div className="carousel-card margin">
          <ImageGallery className="border" items={images} autoPlay={true} />
        </div>
      </div >
    )
  }
}

export default ImageCarousel;


//       <div>
//             <img src="./assets/images/renacer1.webp" alt="Residencial Renacer Sayago entrada" />
//           </div>
//           <div>
//             <img src="./assets/images/renacer2.webp" alt="Residencial Renacer Sayago cuartos" />
//           </div>
//           <div>
//             <img src="./assets/images/renacer3.webp" alt="Residencial Renacer Sayago sala" />
//           </div>
//           <div>
//             <img src="./assets/images/renacer4.webp" alt="Residencial Renacer Sayago jardin exterior" />
//           </div>
//       </Slider>
//     </div>
//   );
// };

// export default ImageCarousel;