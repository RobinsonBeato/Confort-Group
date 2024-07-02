import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResidencialRenacer() {
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
    <>
      <section className="about" id="residencial-gala">

        <figure className="about-banner">
          <img src="./assets/images/about.png" alt="A man in a alice blue shirt with a thinking expression"
            className="w-100" />
        </figure>

        <div className="about-content section-content">

          <p className="section-subtitle margin">Residencial Gala</p>

          <h2 className="h3 section-title margin">Gala </h2>

          <p className="section-text margin">
            ¡Hola! Somos Confort-Group, un grupo dedicado al cuidado de adultos mayores en Montevideo, con más de tres residenciales. Nos apasiona proporcionar un ambiente seguro y confortable para nuestros residentes, asegurando atención de calidad y bienestar. Estamos comprometidos en ofrecer soluciones creativas y efectivas para el cuidado integral de los adultos mayores, adaptándonos constantemente para satisfacer sus necesidades cambiantes.
          </p>
          
          <div className="btn-group">
                  <a href="#contact"  className="btn btn-secondary">Hablemos</a>

                  <Link to="/centros" className="btn btn-primary">Ver más Centros</Link>
          </div>

        </div>



      </section>
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
      <div>
        <section className="contact margin" id="contact">

          <div className="contact-content section-content">

            <p className="section-subtitle">Contactos</p>

            <h2 className="h3 section-title">¿Tienes alguna pregunta? <br /> ¡Contáctanos!</h2>

            <p className="section-text">
              Ponte en contacto y déjame saber cómo puedo ayudarte. Completa el formulario y me pondré en contacto contigo lo antes posible.
            </p>

            <ul className="contact-list">

              <li className="contact-list-item">

                <div className="contact-item-icon">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Dirección</h3>

                  <address style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }} className="contact-info">
                    941 Saqrqorish Road, alandalos, grnata, wa 47122-4194
                  </address>

                </div>


              </li>

              <li className="contact-list-item">

                <div className="contact-item-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Teléfono:</h3>

                  <a href="tel:01234567789" className="contact-info">(01) 234 567 789</a>

                  <a href="tel:09765432200" className="contact-info">(09) 765 432 200</a>
                </div>

              </li>

              <li className="contact-list-item">

                <div className="contact-item-icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>

                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Email:</h3>

                  <a href="mailto:info@jack.com" className="contact-info">info@jack.com</a>

                  <a href="mailto:support@jack.com" className="contact-info">support@jack.com</a>
                </div>

              </li>

              <li>
                <ul className="contac-social-list">

                  <li>
                    <a href="#" className="contact-social-link">
                      <div className="tooltip">Facebook</div>

                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="contact-social-link">
                      <div className="tooltip">Twitter</div>

                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="contact-social-link">
                      <div className="tooltip">Instagram</div>

                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>

                 

                </ul>
              </li>

            </ul>

          </div>

       
          
          <iframe className=" contact-form contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.7641041869124!2d-56.14039232491447!3d-34.8872694728539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80e042c128bb%3A0x43bfb28d4e7aa021!2sResidencial%20GALA!5e0!3m2!1ses!2suy!4v1719932139418!5m2!1ses!2suy" width="100%" height="100%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  

        </section>
        
      </div>
    </>
  )
};


export default ResidencialRenacer;