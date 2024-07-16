import React from "react";
import { Link } from "react-router-dom";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
const features = [
  { id: "clima", text: "CLIMATIZACIÓN", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M14.863 13.4V4.939a2.93 2.93 0 0 0-.84-2.03a2.86 2.86 0 0 0-2.23-.82a2.95 2.95 0 0 0-2.66 3l.01 8.28a4.755 4.755 0 0 0 1.9 8.46a5 5 0 0 0 .95.09a4.76 4.76 0 0 0 4.76-4.75a4.68 4.68 0 0 0-1.89-3.769m-.48 6.66a3.78 3.78 0 0 1-3.15.78a3.7 3.7 0 0 1-2.92-2.98a3.75 3.75 0 0 1 1.43-3.69a.96.96 0 0 0 .39-.77V5.089a1.97 1.97 0 0 1 1.73-2a.7.7 0 0 1 .14-.01a1.88 1.88 0 0 1 1.86 1.86V13.4a.96.96 0 0 0 .39.77a3.742 3.742 0 0 1 .13 5.89" /><path fill="currentColor" d="M13.893 17.169a1.89 1.89 0 0 1-3.78 0a1.86 1.86 0 0 1 1.39-1.81V5.4a.5.5 0 0 1 1 0v9.96a1.87 1.87 0 0 1 1.39 1.809" /></svg> },
  { id: "habitaciones", text: "HABITACIONES INDIVIDUALES, COMPARTIDAS Y EN SUITE ", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z" /></svg> },
  { id: "jardin", text: "JARDÍN ", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 15 15"><path fill="currentColor" d="M13 8c0 3.31-2.19 6-5.5 6S2 11.31 2 8a5.33 5.33 0 0 1 5 3.61V7H4.5A1.5 1.5 0 0 1 3 5.5v-3a.5.5 0 0 1 .9-.3l1.53 2l1.65-3a.5.5 0 0 1 .84 0l1.65 3l1.53-2a.5.5 0 0 1 .9.3v3A1.5 1.5 0 0 1 10.5 7H8v4.61A5.33 5.33 0 0 1 13 8" /></svg> },
  { id: "piscina", text: "PISCINA", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15c1.67-.75 3.33-1.5 5-1.83V5a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H10a1 1 0 0 0-1 1v1h5V5a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H17a1 1 0 0 0-1 1v9.94c2-.32 4-1.94 6-1.94v2c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2zm12-7H9v2h5zm0 4H9v1c1.67.16 3.33 1.31 5 1.79zM2 19c2.22-1 4.44-2 6.67-2c2.22 0 4.44 2 6.66 2c2.23 0 4.45-2 6.67-2v2c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2z" /></svg> },
  { id: "tv", text: "TELEVISIÓN EN TODAS LAS HABITACIONES", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M13 16.5a11.003 11.003 0 0 0 4.041 3.93l1.459.82v.25h-13v-.25l1.459-.82A11.003 11.003 0 0 0 11 16.5m-9.5-3h21m0-11h-21v14h21z" /></svg> },
  { id: "dieta", text: "DIETA PERSONALIZADA", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="m5.44 7.96l.52-.53c.58-.58 1.54-.58 2.14.04l.02.03c.49.5 1.14.74 1.85.81c.97.09 1.91.61 2.53 1.55c.68 1.08.67 2.52-.04 3.59a3.322 3.322 0 0 1-5.18.55c-.56-.55-.88-1.26-.96-2c-.08-.73-.37-1.42-.88-1.93c-.58-.57-.58-1.53 0-2.11M9.64 16c-1.17 0-2.26-.45-3.07-1.28c-.7-.72-1.14-1.62-1.25-2.6c-.03-.3-.12-.69-.36-1.05C4.36 11.9 4 12.9 4 14c0 1.64.8 3.09 2.03 4H19v-1c0-3.6-2.39-6.65-5.66-7.65c.89 1.4.87 3.27-.04 4.65c-.8 1.25-2.18 2-3.66 2m5.14-8.44h1.27c.87 0 1.63.61 1.63 1.7V10h1.25V9c0-1.5-1.33-2.64-2.88-2.64h-1.27c-.83 0-1.54-.82-1.54-1.66s.71-1.46 1.54-1.46V2C13.24 2 12 3.24 12 4.78s1.24 2.78 2.78 2.78M4.5 7.55c.06-.1.14-.2.23-.3l.52-.52c.09-.09.19-.16.29-.23L4.13 5.07c.14-.27.09-.62-.13-.85a.767.767 0 0 0-1.07 0c-.14.14-.21.31-.22.49c-.18.01-.35.08-.49.22c-.29.29-.29.77 0 1.07c.23.22.57.27.85.13zm13.89-3.16c.51-.51.83-1.2.83-1.97h-1.25c0 .83-.7 1.53-1.53 1.53v1.24c1.86 0 3.32 1.52 3.32 3.38V11H21V8.57a4.61 4.61 0 0 0-2.61-4.18M5 21h14c1.11 0 2-.89 2-2H3a2 2 0 0 0 2 2" /></svg> },
  { id: "wifi", text: "WI-FI", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-1.05 0-1.775-.725T9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21m-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1" /></svg> },
  { id: "cuidados", text: "CUIDADO PERSONALIZADO LAS 24 HORAS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m18 20l3.824-3.824a.6.6 0 0 0 .176-.424V10.5A1.5 1.5 0 0 0 20.5 9v0a1.5 1.5 0 0 0-1.5 1.5V15" /><path d="m18 16l.858-.858a.48.48 0 0 0 .142-.343v0a.49.49 0 0 0-.268-.433l-.443-.221a2 2 0 0 0-2.308.374l-.895.895a2 2 0 0 0-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 0 1 2 15.752V10.5A1.5 1.5 0 0 1 3.5 9v0A1.5 1.5 0 0 1 5 10.5V15" /><path d="m6 16l-.858-.858A.5.5 0 0 1 5 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 0 1 2.308.374l.895.895a2 2 0 0 1 .586 1.414V20m4.167-8h-3.334V9.667H8V6.333h2.333V4h3.334v2.333H16v3.334h-2.333z" /></g></svg> }
];
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function Servicios() {
  {

    return (
      <>
        <section className="project margin" id="residencial-renacer">





          <ul className="project-list">

            <li >
              <div className="project-content section-content">



                <h2 className="h3 section-title">Nuestros Servicios</h2>

                <p className="section-text">
                  Nuestros servicios están diseñados para cubrir todas las necesidades de nuestros mayores, ofreciendo un entorno seguro y confortable donde puedan disfrutar de una vida plena y activa. Desde atención médica las 24 horas hasta actividades recreativas y sociales, cada aspecto de nuestro servicio está orientado a mejorar la calidad de vida de nuestros residentes.
                </p>

              </div>

            </li>

            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s1.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>
                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} >Taller de Estimulación Cognitiva</h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                  Actividades personalizadas para mantener y mejorar las capacidades cognitivas, guiadas por la psicóloga Luciana Peláez.
                  </p>


                </div>

              </div>

            </li>

            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s6.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} >Pilates </h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                    Clases de Pilates para fortalecer el cuerpo y mejorar la flexibilidad y el equilibrio.
                  </p>


                </div>

              </div>


            </li>
            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s5.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} >Talleres de música  </h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                    Sesiones interactivas para disfrutar de la música, aprender y participar en actividades musicales.
                  </p>


                </div>

              </div>


            </li>
            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s11.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} >Servicios de psicóloga   </h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                  Apoyo psicológico y emocional para nuestros residentes, con sesiones personalizadas.
                  </p>


                </div>

              </div>


            </li>
            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s8.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} >Psicomotricusta    </h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                  Intervenciones terapéuticas para mejorar la coordinación y el control motor a través de actividades físicas y sensoriales
                  </p>


                </div>

              </div>


            </li>
            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s7.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} >Laborterapia     </h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                  Actividades terapéuticas que fomentan la creatividad y la autonomía, promoviendo el bienestar mental y emocional.
                  </p>


                </div>

              </div>


            </li>
            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s10.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} >Huerta y lectura    </h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                  Espacios para la jardinería y sesiones de lectura, fomentando la conexión con la naturaleza y la cultura.
                  </p>


                </div>

              </div>


            </li>
            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s12.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} >Reflexologia     </h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                  Terapia de masaje en los pies que mejora la circulación y alivia el estrés.
                  </p>


                </div>

              </div>


            </li>
            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s20.webp" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} >Podóloga      </h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                  Cuidado especializado de los pies para mantener la salud podológica de nuestros residentes.
                  </p>


                </div>

              </div>


            </li>
            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s21.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} >Peluquería       </h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                  Servicios de peluquería para mantener una apariencia cuidada y aumentar la autoestima.
                  </p>


                </div>

              </div>


            </li>

            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s3.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} > Espacio de Socialización</h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                  Nuestro espacio de socialización está diseñado para fomentar la interacción y el sentido de comunidad entre los residentes.
                  </p>


                </div>

              </div>
            </li>
            <li>
              <div className="project-card-services" >


                <figure className="card-banner">
                  <img src="./assets/images/s4.jpg" className="w-100" alt="A macintosh on a yellow background." />
                </figure>

                <div style={{ width: '100%', position: 'absolute', bottom: '0px', zIndex: '2', color: "var(--primary)", paddingBlock: "10px", background: "var(--bg-primary", backdropFilter: " blur(100px)" }} >
                  <h3 style={{ paddingLeft: "10px" }} > Taller de Gimnasia</h3>
                  <p style={{ paddingLeft: "10px", marginTop: "5px", color: "var(--color-secondary" }}>
                    Ejercicios diseñados para mejorar la movilidad y el bienestar físico de nuestros residentes.
                  </p>


                </div>

              </div>
            </li>





          </ul>
        </section>
      </>
    )
  }
}

export default Servicios;
