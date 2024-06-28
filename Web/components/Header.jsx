import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <header className="header" data-header>
      <div className="container">
        <h1 className="h1 logo">
          <Link to="/">Confort-Group<span>.</span></Link>
        </h1>

        <div className="navbar-actions">
          <button className="theme-btn" aria-label="Change Theme" title="Change Theme" onClick={handleThemeToggle} data-theme-btn>
            <span className="icon"></span>
          </button>
        </div>

        <button className="nav-toggle-btn" aria-label="Toggle Menu" title="Toggle Menu" onClick={handleNavToggle} data-nav-toggle-btn>
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li><Link to="/" className="navbar-link" onClick={handleNavLinkClick}>Inicio</Link></li>
            <li><a href="#about" className="navbar-link" onClick={handleNavLinkClick}>Sobre Nosotros</a></li>
            <li><Link to="/residencial-renacer" className="navbar-link" onClick={handleNavLinkClick}>Centros</Link></li>
            <li><a href="/PageTest" className="navbar-link" onClick={handleNavLinkClick}>Servicios</a></li>
            {/* <li><a href="#portfolio" className="navbar-link">Portfolio</a></li> */}
            <li><a href="#contact" className="navbar-link" onClick={handleNavLinkClick}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;