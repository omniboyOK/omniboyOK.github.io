import React, { useState, useEffect } from 'react';
import { Palette, Download, Mail, MapPin, Calendar, Briefcase } from 'lucide-react';
import portrait from '../assets/portrait.png';
import picture from '../assets/picture.png';

interface HomeProps {
  onNavigateToResume: () => void;
}

const calculateAge = (birthDateString: string): number => {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const Home: React.FC<HomeProps> = ({ onNavigateToResume }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [currentImage, setCurrentImage] = useState(portrait);
  const [isHovered, setIsHovered] = useState(false);

  const triggerGlitchTransition = (nextImage: string) => {
    setIsGlitching(true);
    // Cambiar la imagen a la mitad de la animación glitch (150ms)
    const switchTimeout = setTimeout(() => {
      setCurrentImage(nextImage);
    }, 150);

    // Finalizar el efecto glitch (350ms)
    const endTimeout = setTimeout(() => {
      setIsGlitching(false);
    }, 350);

    return () => {
      clearTimeout(switchTimeout);
      clearTimeout(endTimeout);
    };
  };

  // Rotación automática cuando NO está en hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const next = currentImage === portrait ? picture : portrait;
      triggerGlitchTransition(next);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    triggerGlitchTransition(picture);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    triggerGlitchTransition(portrait);
  };

  const handleClick = () => {
    const next = currentImage === portrait ? picture : portrait;
    triggerGlitchTransition(next);
  };

  return (
    <section className="home-section fade-in">
      <div className="grid-2 hero-grid">
        {/* Left Column: Portrait Sticker & Splash */}
        <div className="hero-visual">
          <div className="sticker-wrapper">
            <div className="splash-bg"></div>
            <div 
              className={`sticker-container glitch-image-container ${isGlitching ? 'is-glitching' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <img 
                src={currentImage} 
                alt="Retrato de Pablo Barrea" 
                className="sticker-image hero-portrait main-img"
              />
              {isGlitching && (
                <>
                  <img 
                    src={currentImage} 
                    alt="" 
                    className="sticker-image hero-portrait glitch-img glitch-r" 
                    aria-hidden="true"
                  />
                  <img 
                    src={currentImage} 
                    alt="" 
                    className="sticker-image hero-portrait glitch-img glitch-b" 
                    aria-hidden="true"
                  />
                </>
              )}
              {/* Sticker bubble like the reference */}
              <div className="floating-badge yellow-badge">
                <span>Indie Dev!</span>
              </div>
              <div className="floating-badge pink-badge">
                <span>Hola!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Name & Title */}
        <div className="hero-text-container">
          <div className="hero-title-group">
            <h1 className="hero-name">Barrea Pablo</h1>
            <h2 className="hero-subtitle">
              Software Developer / <span className="highlight-text">Indie Game Dev</span>
            </h2>
          </div>

          {/* Social Links */}
          <div className="social-links-container">
            <a 
              href="https://www.linkedin.com/in/pablobarrea" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn linkedin-btn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="https://www.github.com/omniboyok" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn github-btn"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a 
              href="https://www.deviantart.com/pixelcard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn deviantart-btn"
              title="DeviantArt"
            >
              <Palette size={24} />
            </a>
            <a 
              href="https://omniboy.itch.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn itchio-btn"
              title="Itch.io"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h18l-1 14H4L3 3z" />
                <path d="M7 17v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3" />
                <circle cx="8" cy="8" r="1.5" />
                <circle cx="16" cy="8" r="1.5" />
                <path d="M10 13c1 1 3 1 4 0" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="grid-2 info-grid">
        {/* About Me Card */}
        <div className="neo-card about-card">
          <h3 className="section-title">Sobre Mí</h3>
          <p>
            ¡Hola! Me llamo Pablo y soy desarrollador fullstack y creador de videojuegos independiente.
          </p>
          <p>
            Me especializo en programación web (especialmente React y Node.js) y en desarrollo de juegos interactivos y divertidos. Podés conocer más sobre mi trayectoria académica y laboral en mi currículum.
          </p>
          <div className="about-actions">
            <button className="neo-button primary" onClick={onNavigateToResume}>
              Ver Curriculum
            </button>
            <a 
              href="./Pablo_Barrea_ES.pdf" 
              download 
              className="neo-button secondary"
            >
              <Download size={18} />
              Descargar CV
            </a>
          </div>
        </div>

        {/* Personal Details Card */}
        <div className="neo-card details-card">
          <h3 className="section-title">Información Personal</h3>
          <ul className="details-list">
            <li>
              <div className="detail-icon"><Calendar size={20} /></div>
              <div className="detail-content">
                <strong>Edad:</strong>
                <span>{calculateAge('1991-04-11')} Años</span>
              </div>
            </li>
            <li>
              <div className="detail-icon"><MapPin size={20} /></div>
              <div className="detail-content">
                <strong>Localización:</strong>
                <span>CABA, Buenos Aires, Argentina</span>
              </div>
            </li>
            <li>
              <div className="detail-icon"><Mail size={20} /></div>
              <div className="detail-content">
                <strong>Email:</strong>
                <a href="mailto:barrea.pablo@gmail.com">barrea.pablo@gmail.com</a>
              </div>
            </li>
            <li>
              <div className="detail-icon"><Briefcase size={20} /></div>
              <div className="detail-content">
                <strong>Disponibilidad:</strong>
                <span>Trabajos Freelance / Relación de Dependencia</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
