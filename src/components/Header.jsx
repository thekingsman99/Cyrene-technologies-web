import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'glass' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="brand-link">
          <img src="/assets/logo.png" alt="Cyrene Technologies" className="brand-logo" />
          <span className="logo">Cyrene <span className="logo-accent">Technologies</span></span>
        </Link>
        <nav className="nav-links">
          {location.pathname === '/' ? (
            <>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#approach">Approach</a>
              <a href="#contact">Contact</a>
            </>
          ) : (
            <Link to="/">Back to Main</Link>
          )}
        </nav>
        <div className="header-actions">
          {location.pathname === '/' ? (
            <Link to="/ai" className="btn btn-outline ai-link">
              ✨ Discover Cyrene AI
            </Link>
          ) : (
            <button className="btn btn-primary nav-cta">Get Started</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
