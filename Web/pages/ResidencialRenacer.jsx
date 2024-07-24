import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturesListRenacer from '../components/FeaturesListRenacer';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import RenacerLogo from '../components/RenacerLogo';


function ResidencialRenacer() {
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
      original: "./assets/images/t2.jpeg",
      thumbnail: "./assets/images/t2.jpeg",
    },
    {
      original: "./assets/images/renacer3.webp",
      thumbnail: "./assets/images/renacer3.webp",
    },
    {
      original: "./assets/images/renacer4.webp",
      thumbnail: "./assets/images/renacer4.webp",
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
      <section className="about  " id="residencial-renacer">
        <div style={{ marginBottom: "20px", }} className="carousel-card margin ">


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

          <p className="section-subtitle margin">Residencial Renacer</p>

          <h2 className="h3 section-title margin">Renacer </h2>

          <p className="section-text margin">
            Residencial Renacer, ubicado en Avenida Garzón 973, está especializado en el cuidado de adultos mayores en Montevideo. Nuestro predio de 3000 mts² incluye un hermoso parque natural de 2000 mts². Ofrecemos habitaciones individuales y compartidas, equipadas con aire acondicionado, TV LED y frigobar. Los espacios comunes son amplios, con aire acondicionado, TV LED de 55” y sillones recliners. La casa cuenta con dos comedores y dos livings, con grandes ventanales que brindan luz natural, y ocho baños de uso exclusivo.
            Nuestro equipo multidisciplinario se dedica a proporcionar un ambiente seguro y confortable para nuestros residentes, garantizando atención de calidad y bienestar. Nos comprometemos a ofrecer soluciones innovadoras y efectivas para el cuidado integral de los adultos mayores, adaptándonos continuamente a sus necesidades cambiantes.
          </p>

          <div className="btn-group margin">
            <a href="#contact" className="btn btn-secondary">Hablemos</a>

            <Link to="/centros" className="btn btn-primary  ">Ver más Centros</Link>
          </div>

        </div>



      </section>
      <section className="about margin" id="residencial-renacer">



        <div className="about-content section-content">

          <p className="section-subtitle ">Servicios</p>

          <h2 className="h3 section-title ">Explora Nuestros Servicios </h2>

          <p className="section-text ">
            En Residencial Renacer, creamos entornos cálidos y confortables para garantizar el bienestar y la tranquilidad de nuestros residentes. Descubre nuestros servicios y explora los espacios que convierten nuestro hogar en un lugar verdaderamente especial para vivir.
          </p>
          <Link to="/Servicios" style={{ marginTop: '10px', marginBottom: '30px' }} className="btn btn-secondary ">Ver Servicios</Link>
        </div>
        <div className="carousel-card">
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

      <FeaturesListRenacer residencialNames="Renacer" />
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
                    Avenida Garzón 973
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
                    <a href="https://www.facebook.com/profile.php?id=100063217932172" className="contact-social-link">
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
                    <a href="https://www.instagram.com/residencial.renacer/" className="contact-social-link">
                      <div className="tooltip">Instagram</div>

                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>



                </ul>
              </li>

            </ul>

          </div>


          <iframe className=" contact-form contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.9960365130923!2d-56.22325942491745!3d-34.83119217287351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1d50044bf61fb%3A0x504b130faf518b44!2sResidencial%20renacer!5e0!3m2!1ses!2suy!4v1719747210811!5m2!1ses!2suy" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


        </section>

      </div>
    </>
  )
};


export default ResidencialRenacer;