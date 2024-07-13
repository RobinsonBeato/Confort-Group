import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../components/Logo"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    // Check and apply last selected theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light_theme') {
      setIsLightTheme(true);
      document.body.classList.remove('dark_theme');
      document.body.classList.add('light_theme');
    } else {
      setIsLightTheme(false);
      document.body.classList.add('dark_theme');
      document.body.classList.remove('light_theme');
    }
  }, []);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle('active');
  };

  const handleThemeToggle = () => {
    setIsLightTheme(!isLightTheme);

    if (!isLightTheme) {
      document.body.classList.remove('dark_theme');
      document.body.classList.add('light_theme');
      localStorage.setItem('theme', 'light_theme');
    } else {
      document.body.classList.add('dark_theme');
      document.body.classList.remove('light_theme');
      localStorage.setItem('theme', 'dark_theme');
    }
  };

  // Scroll sticky effect
  useEffect(() => {
    const header = document.querySelector('.header');
    const goTopBtn = document.querySelector('[data-go-top]');

    const handleScroll = () => {
      if (window.scrollY >= 10) {
        header.classList.add('active');
        goTopBtn.classList.add('active');
      } else {
        header.classList.remove('active');
        goTopBtn.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
    document.body.classList.remove('active');
  };

  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <h1 className="h1 logo">
            <Link to="/">
              <Logo />
            </Link>
          </h1>

          {/* <div className="navbar-actions">
          <button className="theme-btn" aria-label="Change Theme" title="Change Theme" onClick={handleThemeToggle} data-theme-btn>
            <span className="icon"></span>
          </button>
        </div> */}

          <button className="nav-toggle-btn " aria-label="Toggle Menu" title="Toggle Menu" onClick={handleNavToggle} data-nav-toggle-btn>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>

          <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
            <ul className="navbar-list">
              <li><Link to="/" className="navbar-link" onClick={handleNavLinkClick}>Inicio</Link></li>
              <li><Link to="/about" className="navbar-link" onClick={handleNavLinkClick}>Sobre Nosotros</Link></li>
              <li><Link to="/centros" className="navbar-link" onClick={handleNavLinkClick}>Centros</Link></li>
              <li><Link to="/servicios" className="navbar-link" onClick={handleNavLinkClick}>Servicios</Link></li>
              {/* <li><a href="#portfolio" className="navbar-link">Portfolio</a></li> */}
              <li><Link to="/contact" className="navbar-link" onClick={handleNavLinkClick}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <a href="#top" className="go-top" data-go-top title="Go to Top">
        <ion-icon name="arrow-up"></ion-icon>
      </a>
    </>
  );
};

export default Header;