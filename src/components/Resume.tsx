import React from 'react';
import { Calendar, Briefcase, GraduationCap, Code } from 'lucide-react';

// Import local logo assets
import acamicaLogo from '../assets/logos/acamica.png';
import carrytLogo from '../assets/logos/carryt.png';
import faltaUnoLogo from '../assets/logos/falta-uno.png';
import itmasterLogo from '../assets/logos/itmaster.png';
import personalLogo from '../assets/logos/personal.png';
import siglo21Logo from '../assets/logos/siglo21.png';

interface LogoAvatarProps {
  logo?: string;
  fallbackText: string;
}

const LogoAvatar: React.FC<LogoAvatarProps> = ({ logo, fallbackText }) => {
  if (logo) {
    return (
      <div className="logo-avatar">
        <img 
          src={logo} 
          alt={`${fallbackText} logo`} 
          className="logo-avatar-img"
        />
      </div>
    );
  }

  return (
    <div className="logo-avatar fallback-avatar">
      <span>{fallbackText}</span>
    </div>
  );
};

export const Resume: React.FC = () => {
  const education = [
    {
      title: 'Licenciatura en Informática (en curso)',
      institution: 'Universidad Siglo XXI',
      period: '2024 - Presente',
      logo: siglo21Logo,
      fallbackText: '21',
      color: 'blue-tab'
    },
    {
      title: 'Full Stack Web Developer',
      institution: 'Acamica',
      period: '2019',
      logo: acamicaLogo,
      fallbackText: 'AC',
      color: 'pink-tab'
    },
    {
      title: 'Desarrollador Java',
      institution: 'ITMaster',
      period: '2018 - 2019',
      logo: itmasterLogo,
      fallbackText: 'IT',
      color: 'yellow-tab'
    }
  ];

  const experience = [
    {
      role: 'Co-fundador y Desarrollador Principal',
      company: 'Falta Uno',
      period: 'Junio 2024 - Presente',
      logo: faltaUnoLogo,
      fallbackText: 'F1',
      description: [
        'Arquitectura y desarrollo completo de la aplicación móvil Falta Uno con React Native para iOS y Android.',
        'Diseño e implementación de servicios backend con Node.js y Firebase Cloud Functions sobre Google Cloud Platform.',
        'Gestión del ciclo completo de publicación en App Store y Google Play Store.',
        'Aplicación de metodologías Ágiles para planificación de sprints e iteración continua sobre el producto.'
      ],
      color: 'blue-tab'
    },
    {
      role: 'Desarrollador de Software Senior – Fintech',
      company: 'Personal (ex Telecom)',
      period: 'Mayo 2021 - Junio 2024',
      logo: personalLogo,
      fallbackText: 'PE',
      description: [
        'Desarrollo y mantenimiento de soluciones financieras móviles con React Native en un entorno de alta escala.',
        'Gestión y optimización de pipelines de CI/CD con GitLab CI y Bitrise, reduciendo los tiempos de release.',
        'Liderazgo del proceso de revisión de código (Pull Requests) y definición de estándares de desarrollo frontend.',
        'Trabajo colaborativo con equipos de producto, diseño y QA bajo metodología Ágil/Scrum.'
      ],
      color: 'pink-tab'
    },
    {
      role: 'Tech Lead',
      company: 'Carryt (ex Treggo)',
      period: 'Junio 2020 - Mayo 2021',
      logo: carrytLogo,
      fallbackText: 'CA',
      description: [
        'Liderazgo técnico en la migración de más de 5 aplicaciones web legacy de AngularJS a React, mejorando sustancialmente el rendimiento y la mantenibilidad.',
        'Administración y mantenimiento de infraestructura en servidores Linux con NGINX y despliegue modular en contenedores.',
        'Implementación de suites de testing, mejores prácticas en equipo mediante GitFlow y herramientas de CI/CD para otorgar autonomía y ownership de despliegue al equipo.',
        'Mentoría técnica y definición de estándares de desarrollo frontend para potenciar al equipo de ingeniería.'
      ],
      color: 'purple-tab'
    }
  ];

  const skills = [
    // Mobile
    { name: 'React Native', category: 'mobile', color: '#d91a9c' },
    { name: 'Expo', category: 'mobile', color: '#3a86c8' },
    { name: 'iOS & Android', category: 'mobile', color: '#06d6a0' },
    // Frontend
    { name: 'React.js', category: 'frontend', color: '#7209b7' },
    { name: 'TypeScript', category: 'frontend', color: '#ffd166' },
    { name: 'JavaScript (ES6+)', category: 'frontend', color: '#06d6a0' },
    { name: 'HTML5 & CSS3', category: 'frontend', color: '#3a86c8' },
    // Backend
    { name: 'Node.js', category: 'backend', color: '#ffd166' },
    { name: 'NestJS', category: 'backend', color: '#d91a9c' },
    { name: 'REST APIs & GraphQL', category: 'backend', color: '#7209b7' },
    // Cloud & DevOps
    { name: 'Firebase', category: 'cloud', color: '#ffd166' },
    { name: 'Google Cloud (GCP)', category: 'cloud', color: '#06d6a0' },
    { name: 'GitLab CI/CD & Bitrise', category: 'devops', color: '#3a86c8' },
    { name: 'Docker', category: 'devops', color: '#d91a9c' },
    { name: 'Bash scripting', category: 'tools', color: '#7209b7' },
    // Databases
    { name: 'Firestore', category: 'database', color: '#06d6a0' },
    { name: 'PostgreSQL', category: 'database', color: '#3a86c8' },
    { name: 'MySQL', category: 'database', color: '#ffd166' },
    // Architecture & Others
    { name: 'Clean Architecture', category: 'architecture', color: '#7209b7' },
    { name: 'Agile / Scrum', category: 'architecture', color: '#d91a9c' },
    { name: 'Git', category: 'tools', color: '#06d6a0' },
    { name: 'App Store & Google Play', category: 'tools', color: '#3a86c8' }
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
                <div className="institution-container">
                  <LogoAvatar logo={edu.logo} fallbackText={edu.fallbackText} />
                  <p className="item-subtitle">{edu.institution}</p>
                </div>
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
                  <div className="company-container">
                    <LogoAvatar logo={exp.logo} fallbackText={exp.fallbackText} />
                    <span className="company-tag">{exp.company}</span>
                  </div>
                </div>
                <h4 className="item-title">{exp.role}</h4>
                {Array.isArray(exp.description) ? (
                  <ul className="item-description-list">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="item-description">{exp.description}</p>
                )}
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

