import React from 'react';
import { SectionProps } from '../types';

const Gallery: React.FC<SectionProps> = ({ id }) => {
  const images = [
    { src: "./components/fotos/1.jpg", span: "row-span-2 col-span-2" },
    { src: "./components/fotos/2.jpg", span: "row-span-1 col-span-1" },
    { src: "./components/fotos/3.jpg", span: "row-span-1 col-span-1" },
    { src: "./components/fotos/4.jpg", span: "row-span-2 col-span-1" },
    { src: "./components/fotos/5.jpg", span: "row-span-1 col-span-1" },
    { src: "./components/fotos/1.jpg", span: "row-span-1 col-span-1" },
  ];

  return (
    <section id={id} className="py-32 bg-moonlight-dark scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl text-white font-bold mb-4">
              Nuestra <span className="text-transparent bg-clip-text bg-gold-gradient">Galería</span>
            </h2>
            <p className="text-gray-400 max-w-lg text-lg font-light">Momentos capturados bajo la luz de la luna.</p>
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-block px-8 py-3 border border-moonlight-gold/50 text-moonlight-gold rounded-full hover:bg-moonlight-gold hover:text-black transition-all mt-4 md:mt-0 uppercase text-xs font-bold tracking-widest"
          >
            Ver Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group rounded-2xl ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={img.src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 border border-white/10 group-hover:border-moonlight-gold/50 transition-colors z-20 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-moonlight-gold text-moonlight-gold rounded-full hover:bg-moonlight-gold hover:text-black transition-all"
              >
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;