import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <div className="badge fade-in-up">
          <span className="dot"></span> Available for work
        </div>
        
        <h1 className="hero-title fade-in-up delay-1">
          Hi, I'm <span className="text-gradient">Venkat</span>, <br/>
          Full-Stack Developer.
        </h1>
        
        <p className="hero-desc fade-in-up delay-2">
          I build exceptional digital experiences. Specialized in the MERN stack and modern web architecture. Creating dynamic, responsive, and beautifully designed applications.
        </p>
        
        <div className="hero-actions fade-in-up delay-3">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Download CV <Download size={18} />
          </a>
        </div>
      </div>
      
      <div className="hero-image-container fade-in-up delay-4">
        <div className="hero-image-wrapper glass-panel">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3"></div>
          
          <div className="code-snippet">
            <div className="code-header">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <pre>
              <code>
                <span className="token-keyword">const</span> <span className="token-func">developer</span> = {'{'}
                <br/>
                &nbsp;&nbsp;name: <span className="token-string">'Hema Venkat Munagapati'</span>,
                <br/>
                &nbsp;&nbsp;skills: [<span className="token-string">'MERN Stack'</span>, <span className="token-string">'Tailwind'</span>]
                <br/>
                &nbsp;&nbsp;passion: <span className="token-string">'Learning & Building'</span>
                <br/>
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
