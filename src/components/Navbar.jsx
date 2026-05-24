import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Backdrop overlay for mobile */}
      {menuOpen && <div className="nav-backdrop" onClick={closeMenu} />}

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="text-gradient">Venkat</span>Portfolio.
          </a>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            
            <div className="social-links-mobile">
              <a href="https://github.com/HemaVenkatMunagapati887" target="_blank" rel="noreferrer"><FiGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/hema-venkat-munagapati-565927325/" target="_blank" rel="noreferrer"><FiLinkedin size={20} /></a>
            </div>
          </div>

          <div className="nav-social">
            <a href="https://github.com/HemaVenkatMunagapati887" target="_blank" rel="noreferrer"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/hema-venkat-munagapati-565927325/" target="_blank" rel="noreferrer"><FiLinkedin size={20} /></a>
          </div>

          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

