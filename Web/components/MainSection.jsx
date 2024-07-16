import React, { useState, useEffect } from 'react';




const MainSection = () => {
  return (

    <main>
      <article className="container">

        {/* HERO SECTION */}
        <section className="hero" id="home">

          <figure className="hero-banner">
            <picture>
              <source  srcSet="./assets/images/hero-banner.png" media="(min-width: 768px)" />
              <source  srcSet="./assets/images/hero-banner-md.png" media="(min-width: 500px)" />
              <img  src="./assets/images/hero-banner-sm.png" alt="Adulto mayor y enfermera, Residencial en Montevideo" className="w-100  hero-banner-img-sm" />
            </picture>
          </figure>

          <div className="hero-content">
            <h2 className="h2 hero-title"> Confort Group Residenciales </h2>
            
            
            <a href="#contact" style={{backdropFilter: 'blur(60px)'}} className="btn btn-primary backdrop-blur-2xl ">Hablemos</a>
          </div>

          <ul className="hero-social-list">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100063217932172" className="hero-social-link">
                <ion-icon name="logo-facebook"></ion-icon>
                <div className="tooltip">Facebook</div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/residencial.renacer/" className="hero-social-link">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="tooltip">Instagram</div>
              </a>
            </li>
            <li>
              <a href="#" className="hero-social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
                <div className="tooltip">Linkedin</div>
              </a>
            </li>
          </ul>

          <a href="#stats" className="scroll-down">Scroll</a>

        </section>

        {/* Rest of your article content goes here */}

      </article>

    </main>

  );
};

export default MainSection;