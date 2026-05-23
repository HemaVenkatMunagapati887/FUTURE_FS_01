import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = 
useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <span className="text-gradient">Venkat</span>Portfolio.
        </a>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          
          <div className="social-links-mobile">
            <a href="https://github.com/HemaVenkatMunagapati887" target="_blank" rel="noreferrer"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/hema-venkat-munagapati-565927325/" target="_blank" rel="noreferrer"><FiLinkedin size={20} /></a>
          </div>
        </div>

        <div className="nav-social">
          <a href="https://github.com/HemaVenkatMunagapati887" target="_blank" rel="noreferrer"><FiGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/hema-venkat-munagapati-565927325/" target="_blank" rel="noreferrer"><FiLinkedin size={20} /></a>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
