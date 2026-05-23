import { Code2, Layout, Database } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding container">
      <div className="about-header text-center fade-in-up">
        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
      </div>

      <div className="about-content">
        <div className="about-bio glass-panel fade-in-up delay-1">
          <h3 className="bio-title">Hello, I'm Hema Venkat Munagapati.</h3>
          <p className="bio-text">
            I am a passionate Full-Stack Developer specializing in the MERN stack. I bridge the gap between design and engineering, combining my technical knowledge with a keen eye for design to create beautiful, responsive, and user-centric digital products.
          </p>
          <p className="bio-text">
            Whether I'm designing complex database architectures or tweaking CSS for that pixel-perfect layout, I love the entire process of bringing ideas to life on the web.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <h4 className="stat-num text-gradient">2+</h4>
              <p className="stat-label">Years Focus</p>
            </div>
            <div className="stat-item">
              <h4 className="stat-num text-gradient">10+</h4>
              <p className="stat-label">Projects</p>
            </div>
            <div className="stat-item">
              <h4 className="stat-num text-gradient">100%</h4>
              <p className="stat-label">Commitment</p>
            </div>
          </div>
        </div>

        <div className="about-services fade-in-up delay-2">
          <div className="service-card glass-panel">
            <div className="card-header">
              <Layout className="text-pink" size={28} />
              <h3 className="card-title">Frontend</h3>
            </div>
            <p className="card-desc">Crafting responsive, pixel-perfect user interfaces using React, Tailwind CSS, and framer-motion.</p>
          </div>

          <div className="service-card glass-panel">
            <div className="card-header">
              <Code2 className="text-indigo" size={28} />
              <h3 className="card-title">Backend</h3>
            </div>
            <p className="card-desc">Building robust, scalable RESTful APIs and microservices with Node.js and Express.</p>
          </div>

          <div className="service-card glass-panel">
            <div className="card-header">
              <Database className="text-teal" size={28} />
              <h3 className="card-title">Database</h3>
            </div>
            <p className="card-desc">Designing highly efficient database schemas and queries using MongoDB and PostgreSQL.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
