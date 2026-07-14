import React from 'react';
import { Calendar, Briefcase, GraduationCap, Code } from 'lucide-react';

export const Resume: React.FC = () => {
  const education = [
    {
      title: 'Desarrollador React',
      institution: 'Autodidacta',
      period: 'Desde 2019',
      color: 'blue-tab'
    },
    {
      title: 'Desarrollo Web Fullstack',
      institution: 'ACAMICA',
      period: '2019 - 2020',
      color: 'pink-tab'
    },
    {
      title: 'Programación Java SE 7',
      institution: 'IT Master S.R.L.',
      period: '2018 - 2019',
      color: 'yellow-tab'
    },
    {
      title: 'Técnico Químico',
      institution: 'Escuela Técnica Nº8 Paula Albarracin',
      period: '2004 - 2009',
      color: 'green-tab'
    },
    {
      title: 'Inglés',
      institution: 'C.E.C.I.E. Nº 20 Escuela Martin Luther King',
      period: '2001 - 2006',
      color: 'purple-tab'
    }
  ];

  const experience = [
    {
      role: 'Desarrollador Full Stack Ssr.',
      company: 'Treggo Co.',
      period: 'Junio 2020 - Actualidad',
      description: 'Migración de interfaz de clientes a React. Refactorización y creación de endpoints en servidor Express y MongoDB. Tareas de mantenimiento en servidores Linux y NGINX.',
      color: 'purple-tab'
    },
    {
      role: 'Desarrollador Full Stack Jr.',
      company: 'Kwikvet',
      period: 'Enero 2020 - Junio 2020',
      description: 'Desarrollo de aplicación web administrativa con React, servidor Express y base de datos MySQL.',
      color: 'green-tab'
    }
  ];

  const skills = [
    // Frontend
    { name: 'Git', category: 'tools', color: '#ffd166' },
    { name: 'Javascript (ES6+)', category: 'frontend', color: '#06d6a0' },
    { name: 'React.js', category: 'frontend', color: '#d91a9c' },
    { name: 'HTML5', category: 'frontend', color: '#3a86c8' },
    { name: 'CSS3', category: 'frontend', color: '#7209b7' },
    // Backend & DB
    { name: 'Java SE 7/8', category: 'backend', color: '#06d6a0' },
    { name: 'Nginx', category: 'backend', color: '#ffd166' },
    { name: 'MySQL', category: 'backend', color: '#3a86c8' },
    { name: 'MongoDB', category: 'backend', color: '#d91a9c' },
    { name: 'Heroku', category: 'tools', color: '#7209b7' },
    // Design
    { name: 'Illustrator', category: 'design', color: '#ffd166' },
    { name: 'Photoshop', category: 'design', color: '#06d6a0' }
  ];

  return (
    <section className="resume-section fade-in">
      <div className="section-header-banner">
        <h2 className="banner-title">Mi Trayectoria</h2>
        <p className="banner-subtitle">Educación, Experiencia y Habilidades</p>
      </div>

      <div className="grid-2 timeline-grid">
        {/* Education Column */}
        <div className="timeline-column">
          <div className="column-header">
            <GraduationCap className="header-icon" size={28} />
            <h3>Educación</h3>
          </div>
          <div className="timeline-items">
            {education.map((edu, idx) => (
              <div key={idx} className={`resume-item neo-card ${edu.color}`}>
                <div className="resume-item-badge">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
                <h4 className="item-title">{edu.title}</h4>
                <p className="item-subtitle">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="timeline-column">
          <div className="column-header">
            <Briefcase className="header-icon" size={28} />
            <h3>Experiencia</h3>
          </div>
          <div className="timeline-items">
            {experience.map((exp, idx) => (
              <div key={idx} className={`resume-item neo-card ${exp.color} exp-item`}>
                <div className="resume-item-header">
                  <div className="resume-item-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <span className="company-tag">{exp.company}</span>
                </div>
                <h4 className="item-title">{exp.role}</h4>
                <p className="item-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="neo-card skills-card-section">
        <div className="column-header center-header">
          <Code className="header-icon" size={28} />
          <h3>Conocimientos y Herramientas</h3>
        </div>
        <div className="skills-container">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="skill-sticker"
              style={{ '--sticker-color': skill.color } as React.CSSProperties}
            >
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
