import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturesList from "../components/FueaturesList";
import ImageGallery from "react-image-gallery";
import MonacoLogo from "../components/MonacoLogo";

function ResidencialRoyal() {
  const images = [
    {
      original: "./assets/images/royal-banner.webp",
      thumbnail: "./assets/images/royal-banner.webp",
    },
    {
      original: "./assets/images/r2.webp",
      thumbnail: "./assets/images/r2.webp",
    },
    {
      original: "./assets/images/r4.webp",
      thumbnail: "./assets/images/r4.webp",
    },
    {
      original: "./assets/images/r5.webp",
      thumbnail: "./assets/images/r5.webp",
    },
    {
      original: "./assets/images/r7.webp",
      thumbnail: "./assets/images/r7.webp",
    },
    {
      original: "./assets/images/r9.webp",
      thumbnail: "./assets/images/r9.webp",
    },
    {
      original: "./assets/images/r10.webp",
      thumbnail: "./assets/images/r10.webp",
    },
    {
      original: "./assets/images/r11.webp",
      thumbnail: "./assets/images/r11.webp",
    },
    {
      original: "./assets/images/r12.webp",
      thumbnail: "./assets/images/r12.webp",
    },

    {
      original: "./assets/images/r14.webp",
      thumbnail: "./assets/images/r14.webp",
    },
    {
      original: "./assets/images/r15.webp",
      thumbnail: "./assets/images/r15.webp",
    },
  ];
  const imagesGallery = [
    {
      original: "./assets/images/royal-banner.webp",
      thumbnail: "./assets/images/royal-banner.webp",
    },
    {
      original: "./assets/images/s23.webp",
      thumbnail: "./assets/images/s23.webp",
    },
    {
      original: "./assets/images/s22.webp",
      thumbnail: "./assets/images/s22.webp",
    },
    {
      original: "./assets/images/s21.webp",
      thumbnail: "./assets/images/s21.webp",
    },
  ];
  return (
    <>
      <section className="about" id="residencial-royal">
        <div
          style={{ marginBottom: "20px", marginTop: "10px" }}
          className="carousel-card margin responsive-margin"
        >
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
          <p className="section-subtitle margin">Residencial Royal</p>

          <h2 className="h3 section-title margin">Royal </h2>

          <p className="section-text margin">
            <p>
              
                Lujosa y cálida Residencia en el corazón de Malvín.
              
            

            
              Es una gran casa para un total de 8 residentes, con{" "}
              <strong>5 habitaciones y 3 baños</strong>, que brinda exclusividad
              y una atención personalizada, donde cada residente se siente en su
              casa y en familia.
            
            
              Ofrecemos habitaciones <strong>individuales y compartidas</strong>{" "}
              (máximo dos personas por habitación), asegurando espacio y
              comodidad para todos. Las habitaciones están equipadas con{" "}
              <strong>TV LED de 43” con cable</strong>,{" "}
              <strong>aire acondicionado</strong> y <strong>frigobar</strong>.
              Los espacios comunes cuentan con <strong>TV LED de 65”</strong>,{" "}
              <strong>aire acondicionado</strong> y{" "}
              <strong>
                sillones reclinables individuales con asistencia hidráulica
              </strong>{" "}
              para cada residente.
            </p>
            
            <p>
              Incluye <strong>cuatro comidas diarias</strong> y colaciones,
              además de <strong>servicio de lavandería</strong> sin costo
              adicional.
            </p>

            <p>
              El <strong>patio</strong> es amplio, cómodo y acogedor, ideal para
              el uso y disfrute de nuestros residentes. También disponemos de{" "}
              <strong>parrillero</strong> para encuentros especiales al aire
              libre.
            </p>
            
            
          </p>

          <div className="btn-group margin">
            <a href="#contact" className="btn btn-secondary">
              Hablemos
            </a>

            <Link to="/centros" className="btn btn-primary">
              Ver más Centros
            </Link>
          </div>
        </div>
      </section>
      <section className="about margin" id="residencial-royal">
        <div className="about-content section-content ">
          <p className="section-subtitle">Servicios</p>

          <h2 className="h3 section-title ">Explora Nuestros Servicios </h2>

          <p className="section-text ">
            En Residencial Royal, creamos entornos cálidos y confortables para
            garantizar el bienestar y la tranquilidad de nuestros residentes.
            Descubre nuestros servicios y explora los espacios que convierten
            nuestro hogar en un lugar verdaderamente especial para vivir.
          </p>
          <Link
            to="/Servicios"
            style={{ marginTop: "10px", marginBottom: "60px" }}
            className="btn btn-secondary "
          >
            Ver Servicios
          </Link>
        </div>
        <div className="carousel-card ">
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

      <FeaturesList residencialNames="Royal" />
      <div style={{ paddingBottom: "180px" }}>
        <section className="contact margin" id="contact">
          <div className="contact-content section-content">
            <p className="section-subtitle">Contactos</p>

            <h2 className="h3 section-title">
              ¿Tienes alguna pregunta? <br /> ¡Contáctanos!
            </h2>

            <p className="section-text">
              Ponte en contacto y déjame saber cómo puedo ayudarte. Completa el
              formulario y me pondré en contacto contigo lo antes posible.
            </p>

            <ul className="contact-list">
              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Dirección</h3>

                  <address
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="contact-info"
                  >
                    Rio de la plata 1784, Montevideo, Uruguay
                  </address>
                </div>
              </li>

              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Teléfono:</h3>

                  <a href="tel:+598094666352" className="contact-info">
                    (+598) 094 666 352
                  </a>

                  <a href="tel:+598094942434" className="contact-info">
                    (+598) 094 942 434
                  </a>
                </div>
              </li>

              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>

                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Email:</h3>

                  <a
                    href="mailto:monaco@confort-group.com"
                    className="contact-info"
                  >
                    royal@confort-group.com
                  </a>
                </div>
              </li>

              <li>
                <ul className="contac-social-list">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61563607817727"
                      className="contact-social-link"
                    >
                      <div className="tooltip">Facebook</div>

                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://x.com/confort_group_"
                      className="contact-social-link"
                    >
                      <div className="tooltip">Twitter</div>

                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/residencial_royal_/"
                      className="contact-social-link"
                    >
                      <div className="tooltip">Instagram</div>

                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <iframe
            className=" contact-form contact"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.7485230237944!2d-56.103964124570005!3d-34.88766067285385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f86c536da80df%3A0xa386b9f85e034940!2sR%C3%ADo%20de%20la%20Plata%201784%2C%2011400%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1749014952131!5m2!1ses!2suy"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
        </section>
      </div>
    </>
  );
}

export default ResidencialRoyal;
