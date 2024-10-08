import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturesList from '../components/FueaturesList';
import ImageGallery from "react-image-gallery";
import GalaLogo from '../components/GalaLogo';
function ResidencialRenacer() {
  const images = [
    {
      original: "./assets/images/gala-banner.webp",
      thumbnail: "./assets/images/gala-banner.webp",
    },
    {
      original: "./assets/images/g1.webp",
      thumbnail: "./assets/images/g1.webp",
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
      original: "./assets/images/g4.webp",
      thumbnail: "./assets/images/g4.webp",
    },
    {
      original: "./assets/images/g5.webp",
      thumbnail: "./assets/images/g5.webp",
    },
    {
      original: "./assets/images/g7.webp",
      thumbnail: "./assets/images/g7.webp",
    },
    {
      original: "./assets/images/g8.webp",
      thumbnail: "./assets/images/g8.webp",
    },
    {
      original: "./assets/images/g9.webp",
      thumbnail: "./assets/images/g9.webp",
    },
    {
      original: "./assets/images/g10.webp",
      thumbnail: "./assets/images/g10.webp",
    },


    {
      original: "./assets/images/g6.webp",
      thumbnail: "./assets/images/g6.webp",
    },

    {
      original: "./assets/images/g14.webp",
      thumbnail: "./assets/images/g14.webp",
    },
    {
      original: "./assets/images/g15.webp",
      thumbnail: "./assets/images/g15.webp",
    },
    {
      original: "./assets/images/g16.webp",
      thumbnail: "./assets/images/g16.webp",
    },
  ];
  const imagesGallery = [
    {
      original: "./assets/images/s8.jpg",
      thumbnail: "./assets/images/s8.jpg",
    },
    {
      original: "./assets/images/s2.jpg",
      thumbnail: "./assets/images/s2.jpg",
    },
    {
      original: "./assets/images/s3.jpg",
      thumbnail: "./assets/images/s3.jpg",
    },
    {
      original: "./assets/images/s4.jpg",
      thumbnail: "./assets/images/s4.jpg",
    },
    {
      original: "./assets/images/s5.jpg",
      thumbnail: "./assets/images/s5.jpg",
    },
    {
      original: "./assets/images/s6.jpg",
      thumbnail: "./assets/images/s6.jpg",
    },
  ];
  return (
    <>
      <section className="about" id="residencial-gala">

        <div style={{ marginBottom: "20px" }} className="carousel-card margin">

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

        <div className="about-content section-content">

          <p className="section-subtitle margin">Residencial Gala</p>

          <h2 className="h3 section-title margin">Gala </h2>

          <p className="section-text margin">
            Residencial Gala, ubicado en Dr. Hugo Antuña 3514, es una cálida residencia para adultos mayores en Montevideo, estratégicamente situada a pasos de Avenida Italia y Propios. Ofrecemos habitaciones individuales y compartidas, equipadas con TV LED y cable. Los espacios comunes cuentan con aire acondicionado, TV LED de 50” y sillones recliners. La casa dispone de dos livings.

            Nuestro equipo multidisciplinario, encabezado por un médico geriatra, incluye enfermería y psicóloga. Además, ofrecemos actividades semanales como música, pilates, reflexología y gimnasia. Contamos con una cocinera que prepara menús saludables y balanceados según las necesidades calóricas de los residentes.

            La residencia es coordinada por una licenciada en psicología especializada en salud, quien se encargará de gran parte del trato durante la estadía.
          </p>

          <div className="btn-group margin">
            <a href="#contact" className="btn btn-secondary">Hablemos</a>

            <Link to="/centros" className="btn btn-primary">Ver más Centros</Link>
          </div>

        </div>



      </section>
      <section className="about " id="residencial-renacer">



        <div className="about-content section-content margin">

          <p className="section-subtitle">Servicios</p>


          <h2 className="h3 section-title ">Explora Nuestros Servicios </h2>

          <p className="section-text ">
            En Residencial Gala, creamos entornos cálidos y confortables para garantizar el bienestar y la tranquilidad de nuestros residentes. Descubre nuestros servicios y explora los espacios que convierten nuestro hogar en un lugar verdaderamente especial para vivir.
          </p>
          <Link to="/Servicios" style={{ marginTop: '10px', marginBottom: '60px' }} className="btn btn-secondary  ">Ver Servicios</Link>

        </div>
        <div className="carousel-card margin ">
          <ImageGallery
            items={imagesGallery}
            autoPlay={true}
            renderItem={(item) => (
              <div className="image-container">
                <img src={item.original} alt="" />
              </div>
            )}
          />
        </div>

      </section>

      <FeaturesList residencialNames="Gala" />
      <div style={{ paddingBottom: '180px' }}>
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
                    Dr. Hugo Antuña 3514
                  </address>

                </div>


              </li>

              <li className="contact-list-item">

                <div className="contact-item-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Teléfono:</h3>

                  <a href="tel:+598094666352" className="contact-info">(+598) 094 666 352</a>

                  <a href="tel:+598094942434" className="contact-info">(+598) 094 942 434</a>
                </div>

              </li>

              <li className="contact-list-item">

                <div className="contact-item-icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>

                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Email:</h3>

                  <a href="mailto:gala@confort-group.com" className="contact-info">gala@confort-group.com</a>
                </div>

              </li>

              <li>
                <ul className="contac-social-list">

                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61564157926380" className="contact-social-link">
                      <div className="tooltip">Facebook</div>

                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="https://x.com/confort_group_" className="contact-social-link">
                      <div className="tooltip">Twitter</div>

                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/residencial_gala/" className="contact-social-link">
                      <div className="tooltip">Instagram</div>

                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>



                </ul>
              </li>

            </ul>

          </div>



          <iframe className=" contact-form contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.7610931151344!2d-56.14040672491449!3d-34.88734507285397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80e0699245df%3A0xaecf76d91a051807!2sDr.%20Hugo%20Antu%C3%B1a%203514%2C%2011600%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1720877914769!5m2!1ses!2suy" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </section>

      </div>
    </>
  )
};


export default ResidencialRenacer;