import React, { useEffect, useState } from 'react';
import { SectionProps } from '../types';

const Hero: React.FC<SectionProps> = ({ id }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 bg-moonlight-black">
        <img
          src="./components/fotos/1.jpg"
          alt="Moonlight Eventos Background"
          className="w-full h-full object-cover will-change-transform opacity-40 grayscale-[20%]"
          style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.1)` }}
        />
        {/* Overlay Dark Gradient with subtle violet tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-moonlight-black via-moonlight-black/80 to-moonlight-black mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-moonlight-violet/5 mix-blend-overlay"></div>
        
        {/* Animated Glows - Increased Violet intensity */}
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-moonlight-violet/30 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-moonlight-gold/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fadeUp">
            {/* Violet Pulse Badge */}
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 border border-moonlight-violet/50 rounded-full backdrop-blur-md bg-black/60 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                <span className="w-2 h-2 rounded-full bg-moonlight-violet animate-pulse shadow-[0_0_10px_#7c3aed]"></span>
                <span className="text-moonlight-violet-light text-sm tracking-[0.3em] uppercase font-semibold">Exclusividad & Elegancia</span>
            </div>
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none drop-shadow-2xl tracking-tight">
          Moonlight <br />
          <span className="text-transparent bg-clip-text bg-gold-gradient text-glow">
            Eventos
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Un escenario sofisticado donde el diseño moderno se encuentra con la magia de la noche.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="gold-shine relative px-10 py-4 bg-gradient-to-b from-moonlight-gold to-moonlight-gold-dark text-black rounded-full font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Reservar Fecha
          </a>
          
          <a
            href="#gallery"
            className="px-10 py-4 bg-transparent border border-moonlight-violet/50 text-moonlight-violet-light rounded-full font-semibold text-lg transition-all hover:bg-moonlight-violet/10 hover:border-moonlight-violet hover:text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
          >
            Ver Galería
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-moonlight-violet/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;