import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { FaLandmark, FaLaptopCode, FaBriefcase, FaUsersCog } from 'react-icons/fa';
import { FaHouseMedical } from 'react-icons/fa6';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "SmartPanchayat - E-Governance SaaS Platform",
      desc: "An AI-powered e-governance platform featuring intelligent complaint management, voice-to-text complaint filing, real-time tracking, interactive heatmaps, and digital Panchayat services (tax, pension, certificate management).",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI APIs", "Socket.IO"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <FaLandmark />
    },
    {
      title: "AI-Smart Hospital Management System",
      desc: "A full-stack AI healthcare platform with multilingual symptom translations, telemedicine consults, appointment scheduling, digital health records, and automated secure role-based dashboards.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI APIs", "Cloudinary"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <FaHouseMedical />
    },
    {
      title: "AI Career Operating System",
      desc: "An Enterprise Admin Dashboard featuring robust authentication, RBAC systems, financial monitoring, and AI infrastructure control for career management and platform governance.",
      tech: ["React.js", "Node.js", "Enterprise SaaS", "RBAC", "Auth"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <FaBriefcase />
    },
    {
      title: "Mini CRM (Client Lead Management)",
      desc: "A full-stack customer relationship manager built during internship, supporting secure admin access, lead status tracking, CRUD operations, and detailed analytics dashboards.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <FaUsersCog />
    },
    {
      title: "Professional Portfolio Website",
      desc: "This personal portfolio showcasing projects and skills. Features dynamic vector flying jet animations, interactive cursor-following gravity lines, spark trails, and card designs.",
      tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <FaLaptopCode />
    }
  ];

  return (
    <section id="projects" className="projects section-padding container">
      <h2 className="section-title fade-in-up">My <span className="text-gradient">Projects</span></h2>
      
      <div className="projects-grid fade-in-up delay-2">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card glass-panel">
            <div className="project-content">
              
              <div className="project-top-bar">
                <div className="project-icon-box">
                  {project.icon}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="icon-link">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="icon-link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
