import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "JAHIZ Platform",
    desc: "منصة خدمات موحدة لحضرموت تخدم 6 قطاعات (حرفيين، معدات، سكن، سوق، وظائف، استراحات).",
    tech: ["React.js", "Supabase", "Tailwind"],
    live: "https://moh775-m.github.io/services-platfom/",
    github: "https://github.com/moh775-m/services-platfom",
    featured: true
  },
  {
    id: 2,
    title: "Prayer Times App",
    desc: "تطبيق مواقيت الصلاة بدقة.",
    tech: ["JavaScript", "API", "CSS3"],
    live: "https://moh775-m.github.io/prayer-timer/",
    github: "https://github.com/moh775-m/prayer-timer",
    featured: false
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "موقعي الشخصي الحالي أعمالي .",
    tech: ["React.js", "Framer Motion", "CSS3"],
    live: "https://moh775-m.github.io/profile/",
    github: "https://github.com/moh775-m/profile",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h5 className="section-sub">My Recent Work</h5>
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        {projectsData.map((project) => (
          <article key={project.id} className={`project-card ${project.featured ? 'featured-card' : ''}`}>
            {project.featured && <span className="featured-badge">Featured</span>}
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer" className="btn-live">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-github">
                <FaGithub /> GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;