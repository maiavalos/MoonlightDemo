import React from 'react';
import { SectionProps, Testimonial } from '../types';
import { StarIcon } from './Icons';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sofía Martínez",
    event: "Boda",
    text: "Simplemente mágico. La elegancia del salón y los detalles en dorado superaron mis expectativas. La iluminación violeta fue el toque perfecto para la fiesta.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos & Andrea",
    event: "XV Años",
    text: "Buscábamos algo moderno pero distinguido. Moonlight Eventos nos dio exactamente eso. La atención fue de primer nivel.",
    rating: 5
  },
  {
    id: 3,
    name: "TechSolutions Inc.",
    event: "Corporativo",
    text: "El ambiente sobrio y lujoso fue ideal para nuestro evento de fin de año. Catering excelente y tecnología impecable.",
    rating: 5
  }
];

const Testimonials: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-32 relative bg-moonlight-black scroll-mt-24">
      {/* Background Decor - Increased Violet Presence */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-moonlight-violet/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-moonlight-violet/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-moonlight-violet text-sm tracking-[0.3em] uppercase font-bold text-glow-violet">Experiencias Reales</span>
          <h2 className="font-serif text-5xl md:text-6xl text-white font-bold mt-4 mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gold-gradient">Clientes</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-moonlight-violet to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card p-10 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500 border-t border-moonlight-violet/20 hover:border-moonlight-violet/50 hover:shadow-[0_10px_30px_rgba(124,58,237,0.1)]">
              {/* Gold Quote Icon */}
              <div className="absolute top-6 right-8 text-6xl font-serif text-moonlight-gold/10 group-hover:text-moonlight-violet/20 transition-colors">"</div>
              
              <div className="flex gap-1 mb-6 text-moonlight-gold">
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-8 font-light leading-relaxed relative z-10">
                {t.text}
              </p>
              
              <div className="flex items-center pt-6 border-t border-white/5">
                {/* Avatar with Violet Gradient */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-moonlight-violet to-violet-900 flex items-center justify-center text-white font-bold font-serif shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  {t.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium tracking-wide group-hover:text-moonlight-violet-light transition-colors">{t.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">{t.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;