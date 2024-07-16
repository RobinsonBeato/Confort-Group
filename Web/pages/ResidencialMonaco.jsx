import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturesList from '../components/FueaturesList';
import ImageGallery from "react-image-gallery";

function ResidencialMonaco() {

  const images = [
    {
      original: "./assets/images/m2.webp",
      thumbnail: "./assets/images/m2.webp",
    },
    {
      original: "./assets/images/m3.webp",
      thumbnail: "./assets/images/m3.webp",
    },
    {
      original: "./assets/images/m4.webp",
      thumbnail: "./assets/images/m4.webp",
    },
    {
      original: "./assets/images/m5.webp",
      thumbnail: "./assets/images/m5.webp",
    },
    {
      original: "./assets/images/m6.webp",
      thumbnail: "./assets/images/m6.webp",
    },
    {
      original: "./assets/images/m7.webp",
      thumbnail: "./assets/images/m7.webp",
    },
    {
      original: "./assets/images/m8.webp",
      thumbnail: "./assets/images/m8.webp",
    },
    {
      original: "./assets/images/m9.webp",
      thumbnail: "./assets/images/m9.webp",
    },
    {
      original: "./assets/images/m10.webp",
      thumbnail: "./assets/images/m10.webp",
    },
  ];
  return (
    <>
      <section className="about" id="residencial-monaco">

        <figure className="about-banner">
          <img src="./assets/images/about.png" alt="A man in a alice blue shirt with a thinking expression"
            className="w-100" />
        </figure>

        <div className="about-content section-content">

          <p className="section-subtitle margin">Residencial Mónaco</p>

          <h2 className="h3 section-title margin">Mónaco </h2>

          <p className="section-text margin">
            ¡Hola! Somos Confort-Group, un grupo dedicado al cuidado de adultos mayores en Montevideo, con más de tres residenciales. Nos apasiona proporcionar un ambiente seguro y confortable para nuestros residentes, asegurando atención de calidad y bienestar. Estamos comprometidos en ofrecer soluciones creativas y efectivas para el cuidado integral de los adultos mayores, adaptándonos constantemente para satisfacer sus necesidades cambiantes.
          </p>

          <div className="btn-group">
            <a href="#contact" className="btn btn-secondary">Hablemos</a>

            <Link to="/centros" className="btn btn-primary">Ver más Centros</Link>
          </div>

        </div>



      </section>
      <section className="about" id="residencial-renacer">



        <div className="about-content section-content">

          <p className="section-subtitle margin">Imágenes</p>

          <h2 className="h3 section-title margin">Explora Nuestros Espacios </h2>

          <p className="section-text margin">
            En Residencial Renacer, creamos entornos cálidos y confortables para garantizar el bienestar y la tranquilidad de nuestros residentes. Descubre nuestras instalaciones y explora los espacios que convierten nuestro hogar en un lugar verdaderamente especial para vivir.
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

      </section>

      <FeaturesList residencialNames="Mónaco" />
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
                    Bulevar Artigas 4189
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

                  <a href="mailto:residencial.renacer@hotmail.com" className="contact-info">residencial.renacer@hotmail.com</a>
                </div>

              </li>

              <li>
                <ul className="contac-social-list">

                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61550605028616" className="contact-social-link">
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
                    <a href="https://www.instagram.com/residencial__monaco/" className="contact-social-link">
                      <div className="tooltip">Instagram</div>

                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>



                </ul>
              </li>

            </ul>

          </div>


          <iframe className=" contact-form contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.707801571634!2d-56.19915186831462!3d-34.87220392709374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f800693e789db%3A0x2e4907e80542eb6a!2sBv.%20Gral.%20Artigas%204189%2C%2011800%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1720877605166!5m2!1ses!2suy" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          

        </section>

      </div>
    </>
  )
};


export default ResidencialMonaco;