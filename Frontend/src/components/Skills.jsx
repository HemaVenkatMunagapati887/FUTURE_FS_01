import { FaReact, FaNodeJs, FaServer, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiSocketdotio } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS / Bootstrap", level: 92 },
        { name: "Redux / Context API", level: 82 }
      ]
    },
    {
      title: "BACKEND & DATABASES",
      skills: [
        { name: "Node.js / Express.js", level: 88 },
        { name: "MongoDB / SQL", level: 85 },
        { name: "Socket.io / JWT Auth", level: 80 }
      ]
    },
    {
      title: "TOOLS & CORE",
      skills: [
        { name: "Git / GitHub", level: 88 },
        { name: "Vercel / Postman", level: 85 },
        { name: "DSA / DBMS / OOP", level: 82 }
      ]
    }
  ];

  const techPills = [
    { name: "React.js", icon: <FaReact className="pill-icon text-react" /> },
    { name: "Node.js", icon: <FaNodeJs className="pill-icon text-node" /> },
    { name: "Express.js", icon: <FaServer className="pill-icon text-express" /> },
    { name: "MongoDB", icon: <SiMongodb className="pill-icon text-mongo" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="pill-icon text-tailwind" /> },
    { name: "JWT Auth", icon: <FaShieldAlt className="pill-icon text-jwt" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="pill-icon text-socket" /> },
    { name: "DSA & DBMS", icon: <FaDatabase className="pill-icon text-dsa" /> }
  ];

  return (
    <section id="skills" className="skills section-padding container">
      <h2 className="section-title fade-in-up">My <span className="text-gradient">Skills</span></h2>
      
      <div className="skills-grid fade-in-up delay-1">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skills-box glass-panel">
            <h3 className="skills-box-title">{category.title}</h3>
            
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-pills-container fade-in-up delay-2">
        {techPills.map((pill, idx) => (
          <div key={idx} className="tech-pill glass-panel">
            {pill.icon}
            <span className="pill-name">{pill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
