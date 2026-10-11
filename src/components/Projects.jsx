import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const BASE = import.meta.env.BASE_URL;

const projectsData = [
    {
    id: 3,
    title: "صيدليات حضرموت",
    desc: "منصة للبحث عن الأدوية والصيدليات المتاحة في حضرموت مع تحديد الموقع والتواصل المباشر.",
    tech: ["React.js", "Supabase", "Leaflet Map"],
    live: "https://saydaliyat-hadhramout.vercel.app/",
    github: "https://github.com/moh775-m/saydaliyat-hadhramout",
    featured: true,
    image: `${BASE}say.jpeg`
  },

  {
    id: 1, title: "JAHIZ Platform",
    desc: "منصة لعرض بعض الخدمات في حضرموت",
    tech: ["React.js", "Supabase", "Tailwind"],
    live: "https://moh775-m.github.io/services-platfom/",
    github: "https://github.com/moh775-m/services-platfom",
    featured: true, 
    image: `${BASE}jahiz.jpeg`
  },
  {
    id: 2, title: "Prayer Times App",
    desc: "تطبيق مواقيت الصلاة بدقة.",
    tech: ["JavaScript", "API", "CSS3"],
    live: "https://moh775-m.github.io/prayer-timer/",
    github: "https://github.com/moh775-m/prayer-timer",
    featured: false, 
    image: `${BASE}pray.jpeg`
  },
  {
    id: 4, title: "NOOR - نور المسلم",
    desc: "تطبيق إسلامي متكامل PWA",
    tech: ["React.js", "Vite PWA", "Tailwind CSS"],
    live: "https://moh775-m.github.io/noor/",
    github: "https://github.com/moh775-m/noor",
    featured: false, 
    image: `${BASE}noor.jpeg`
  },
 
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
            
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-image-overlay">
                <a href={project.live} target="_blank" rel="noreferrer">عرض مباشر</a>
              </div>
            </div>

            <div className="project-content">
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;