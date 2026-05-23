import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content-simple">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Venkat. All rights reserved.
        </p>
        
        <div className="social-icons">
          <a href="https://github.com/HemaVenkatMunagapati887" target="_blank" rel="noreferrer"><FiGithub size={18} /></a>
          <a href="www.linkedin.com/in/hema-venkat-munagapati-565927325" target="_blank" rel="noreferrer"><FiLinkedin size={18} /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FiTwitter size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
