import React from 'react';
import { SectionProps, ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Eventos infantiles",
    description: "Creamos la atmósfera perfecta para los más pequeños. Decoración colorida, juegos y entretenimiento garantizado.",
    image: "./components/fotos/2.jpg",
    icon: (
      <svg className="w-8 h-8 text-moonlight-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "15 Años",
    description: "Una noche mágica llena de brillo. Pista de baile LED, efectos especiales en violeta y dorado y una mesa dulce inolvidable.",
    image: "./components/fotos/3.jpg",
    icon: (
      <svg className="w-8 h-8 text-moonlight-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Bodas",
    description: "Elegancia y romanticismo para el día más importante. Decoración floral, iluminación cálida y catering premium.",
    image: "./components/fotos/4.jpg",
    icon: (
      <svg className="w-8 h-8 text-moonlight-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const Services: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-32 bg-moonlight-black relative scroll-mt-24 overflow-hidden">
      {/* Background Decor - Increased intensity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-moonlight-violet/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-moonlight-gold font-bold tracking-[0.3em] uppercase text-xs mb-4">Lo que ofrecemos</h2>
          <h3 className="font-serif text-5xl md:text-6xl text-white font-bold">
            Servicios <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-moonlight-gold to-moonlight-violet font-serif">Premium</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={service.id} className="group relative bg-moonlight-paper border border-white/5 rounded-3xl overflow-hidden hover:border-moonlight-violet/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]">
              
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-moonlight-violet/10 transition-all z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center rounded-full group-hover:bg-moonlight-violet group-hover:text-white transition-all">
                  <span className="font-serif font-italic">{index + 1}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 relative">
                <div className="absolute -top-10 left-8 p-4 bg-moonlight-black border border-moonlight-violet/30 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-serif text-white mb-4 mt-4 group-hover:text-moonlight-violet-light transition-colors">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{service.description}</p>
                <a href="#contact" className="inline-block text-xs font-bold text-white uppercase tracking-widest border-b border-moonlight-gold/50 pb-1 hover:text-moonlight-violet hover:border-moonlight-violet transition-colors">
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;