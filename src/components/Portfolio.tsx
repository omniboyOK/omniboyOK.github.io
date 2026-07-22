import React, { useState } from 'react';
import { ExternalLink, Trophy, Gamepad2, Layers } from 'lucide-react';

// Import images
import catJob from '../assets/cat_thumb.png';
import emojiThumb from '../assets/emoji_thumb.png';
import mockupThumb from '../assets/mockup_thumb.png';
import faltaUno from '../assets/falta-uno.png';
import modoMundial from '../assets/modo-mundial.png';
import semana21FaltaUno from '../assets/semana21-falta-uno.png';
import personalPay from '../assets/personal-pay.png';
import treggoImg from '../assets/treggo.png';

interface Project {
  title: string;
  description: string;
  category: 'products' | 'game-design';
  image: string;
  link: string;
  tags: string[];
}

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos', icon: <Layers size={16} /> },
    { id: 'products', label: 'Productos & Logros', icon: <Trophy size={16} /> },
    { id: 'game-design', label: 'Diseño de Juegos', icon: <Gamepad2 size={16} /> },
  ];

  const projects: Project[] = [
    // Productos & Logros
    {
      title: 'Falta Uno - App & Co-fundador',
      description: 'Co-creación y desarrollo de una app mobile (Tinder del fútbol) para conectar jugadores y armar partidos. Destacada en medios nacionales por resolver el problema de conseguir jugadores para partidos de fútbol amateur.',
      category: 'products',
      image: faltaUno,
      link: 'https://www.faltauno.ar',
      tags: ['React Native', 'Firebase', 'GCP', 'Startup']
    },
    {
      title: 'Personal Pay – Billetera Digital Fintech',
      description: 'Desarrollo y mantenimiento del frontend de la billetera digital Personal Pay (Telecom Argentina) con React Native para iOS y Android. Implementación del flujo de validación de identidad KYC y gestión de pipelines CI/CD con Bitrise, optimizando los ciclos de entrega en un producto de alta escala con millones de usuarios.',
      category: 'products',
      image: personalPay,
      link: 'https://www.personalpay.com.ar',
      tags: ['React Native', 'KYC', 'CI/CD', 'Bitrise', 'Fintech']
    },
    {
      title: 'Treggo (Carryt) – Plataforma de Logística',
      description: 'Liderazgo técnico en la migración de más de 5 aplicaciones web legacy de AngularJS a React. Mantenimiento de infraestructura en servidores Linux con NGINX y despliegue en contenedores. Implementación de suites de testing, estándares GitFlow y pipelines de CI/CD para fomentar la autonomía y ownership del equipo en cada despliegue.',
      category: 'products',
      image: treggoImg,
      link: 'https://www.carryt.co',
      tags: ['React', 'AngularJS', 'Linux', 'NGINX', 'Docker', 'GitFlow', 'CI/CD']
    },
    {
      title: 'Falta Uno en Semana21 (Siglo 21)',
      description: 'Exposición y pitch de Falta Uno ante profesionales y estudiantes en la Semana21 de la Universidad Siglo 21, destacando la propuesta de valor del producto, la arquitectura y su escalabilidad técnica.',
      category: 'products',
      image: semana21FaltaUno,
      link: 'https://www.iproup.com/startups/57055-son-argentinos-y-crearon-un-tinder-para-sumar-jugadores-de-futbol',
      tags: ['Universidad Siglo 21', 'Exposición', 'Pitch']
    },
    {
      title: 'Enjoy Face - Campaña Modo Mundial',
      description: 'Implementación y diseño de la campaña interactiva mundialista en la aplicación Enjoy Face, atrayendo usuarios mediante una experiencia futbolera interactiva durante la Copa del Mundo.',
      category: 'products',
      image: modoMundial,
      link: 'https://www.enjoyteam.com.ar',
      tags: ['React Native', 'Modo Mundial', 'Marketing Tecnológico']
    },
    // Gamedev & Design
    {
      title: 'Juego HTML5 (CatJob)',
      description: 'Videojuego 2D desarrollado con Construct 2 y Javascript. Publicado en Google Play con integración de anuncios AdMob.',
      category: 'game-design',
      image: catJob,
      link: 'https://omniboyok.itch.io/catjob',
      tags: ['Construct 2', 'JavaScript', 'AdMob']
    },
    {
      title: 'Emojis en Pixel-Art',
      description: 'Pack de emoticones e íconos temáticos en Pixel Art hechos para la comunidad de Overwatch en Discord, disponibles en Itch.io.',
      category: 'game-design',
      image: emojiThumb,
      link: 'https://omniboyok.itch.io/overwatch-discord-emoji',
      tags: ['Pixel Art', 'Discord Emojis', 'Design']
    },
    {
      title: 'Diseño de Personaje',
      description: 'Ilustración y diseño digital de un personaje con la estética gráfica oscura inspirada directamente en el videojuego Darkest Dungeon.',
      category: 'game-design',
      image: mockupThumb,
      link: 'https://www.deviantart.com/pixelcard/art/Invoker-Darkest-Dungeon-Hero-783370974',
      tags: ['Illustration', 'Darkest Dungeon', 'DeviantArt']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="portfolio-section fade-in">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Mis Proyectos</h2>
        
        {/* Category Filters */}
        <div className="filters-container">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`filter-btn ${isActive ? 'active' : ''}`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid-3 projects-grid">
        {filteredProjects.map((project, idx) => (
          <article key={idx} className="neo-card project-card">
            {/* Project Image Frame */}
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              {/* Reference-style circular link button */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-floating-btn"
                aria-label={`Ver más sobre ${project.title}`}
              >
                <ExternalLink size={20} />
              </a>
            </div>

            {/* Project Details */}
            <div className="project-info">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              
              {/* Tech Tags */}
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="neo-badge project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
