import React, { useState } from 'react';
import { ExternalLink, Code2, Globe, Gamepad2, Layers } from 'lucide-react';

// Import images
import tatetiJava from '../assets/tatetijava_thumb.png';
import tatetiJs from '../assets/tatetijs_thumb.png';
import telegramBot from '../assets/telegrambot_thumb.png';
import netflix from '../assets/netflix.png';
import masseur from '../assets/masseur.png';
import news from '../assets/news.png';
import concesionaria from '../assets/concesionaria.png';
import catJob from '../assets/cat_thumb.png';
import emojiThumb from '../assets/emoji_thumb.png';
import mockupThumb from '../assets/mockup_thumb.png';

interface Project {
  title: string;
  description: string;
  category: 'programming' | 'web' | 'game-design';
  image: string;
  link: string;
  tags: string[];
}

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos', icon: <Layers size={16} /> },
    { id: 'programming', label: 'Programación', icon: <Code2 size={16} /> },
    { id: 'web', label: 'Desarrollo Web', icon: <Globe size={16} /> },
    { id: 'game-design', label: 'Diseño de Juegos', icon: <Gamepad2 size={16} /> },
  ];

  const projects: Project[] = [
    // Programación
    {
      title: 'Tateti en Java',
      description: 'Juego hecho en Java SE con interfaz gráfica en Swing. Contiene indicador de turnos y condiciones de victoria bajo arquitectura orientada a objetos.',
      category: 'programming',
      image: tatetiJava,
      link: 'https://github.com/omniboyOK/java-ta-te-ti',
      tags: ['Java', 'Swing', 'OOP']
    },
    {
      title: 'Tateti en Javascript',
      description: 'Prototipo básico de juego Tres en Línea desarrollado con la librería y motor de juegos 2D PandaJS en JavaScript.',
      category: 'programming',
      image: tatetiJs,
      link: 'https://github.com/omniboyOK/tic-tac-toe-js',
      tags: ['JavaScript', 'PandaJS', 'Gamedev']
    },
    {
      title: 'Bot de Telegram RPG',
      description: 'Bot RPG para Telegram. Permite generar personajes, guardarlos en base de datos SQL y batallar entre usuarios directamente por chat.',
      category: 'programming',
      image: telegramBot,
      link: 'https://github.com/omniboyOK/Telegram-Java-Template-Espanol',
      tags: ['Java', 'Telegram API', 'SQL']
    },
    // Desarrollo Web
    {
      title: 'Netflix Mockup',
      description: 'Copia funcional del catálogo de Netflix desarrollada con Node.js y Express, consultando películas directamente desde la API oficial de TheMovieDB.',
      category: 'web',
      image: netflix,
      link: 'https://github.com/omniboyOK', // link de fallback ya que herokuapp.com puede estar inactivo
      tags: ['Node.js', 'Express', 'TMDB API']
    },
    {
      title: 'Reserva de Masajes',
      description: 'Aplicación web construida en React para administrar reservas y turnos de masajes. Los datos persistentes se almacenan localmente.',
      category: 'web',
      image: masseur,
      link: 'https://github.com/omniboyOK',
      tags: ['React.js', 'Local Storage', 'CSS']
    },
    {
      title: 'Noticias Destacadas NYT',
      description: 'Aplicación en React conectada con la API pública de The New York Times. Permite filtrar y visualizar noticias relevantes por categorías.',
      category: 'web',
      image: news,
      link: 'https://github.com/omniboyOK',
      tags: ['React.js', 'NYT API', 'Responsive']
    },
    {
      title: 'Consola Concesionaria',
      description: 'Prototipo de sistema contable y de inventario para una concesionaria, ejecutado por consola y desarrollado en JavaScript.',
      category: 'web',
      image: concesionaria,
      link: 'https://github.com/omniboyOK',
      tags: ['Node.js', 'CLI', 'Console']
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
