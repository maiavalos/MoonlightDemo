import React, { useState } from 'react';
import { SectionProps } from '../types';
import { SendIcon } from './Icons';

type TabType = 'general' | 'visit' | 'date';

const Contact: React.FC<SectionProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<TabType>('date');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer id={id} className="bg-moonlight-black pt-24 pb-12 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
                <h2 className="font-serif text-5xl text-white font-bold mb-4">Contáctanos</h2>
                <div className="w-20 h-1 bg-moonlight-gold mb-6"></div>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                Estamos listos para hacer realidad tu evento soñado con la elegancia que nos caracteriza.
                </p>
            </div>
            
            <div className="space-y-8 mt-8">
              <div className="flex items-start group">
                {/* Violet Icon Container */}
                <div className="flex-shrink-0 w-12 h-12 border border-moonlight-violet/30 rounded-full flex items-center justify-center text-moonlight-violet group-hover:bg-moonlight-violet group-hover:text-white transition-all shadow-[0_0_10px_rgba(124,58,237,0.1)] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-white font-serif text-xl">Ubicación</h3>
                  <p className="text-gray-500 font-light mt-1">Arturo Illia 3794, Rafael Calzada</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 border border-moonlight-violet/30 rounded-full flex items-center justify-center text-moonlight-violet group-hover:bg-moonlight-violet group-hover:text-white transition-all shadow-[0_0_10px_rgba(124,58,237,0.1)] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-white font-serif text-xl">Teléfono</h3>
                  <p className="text-gray-500 font-light mt-1">+54 11 1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 border border-moonlight-violet/30 rounded-full flex items-center justify-center text-moonlight-violet group-hover:bg-moonlight-violet group-hover:text-white transition-all shadow-[0_0_10px_rgba(124,58,237,0.1)] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-white font-serif text-xl">Email</h3>
                  <p className="text-gray-500 font-light mt-1">contacto@moonlighteventos.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Section */}
          <div className="bg-moonlight-paper rounded-3xl border border-white/5 overflow-hidden flex flex-col shadow-2xl relative">
            {/* Violet Glow on Form */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-moonlight-violet/10 blur-[60px] pointer-events-none"></div>

            {/* Tabs */}
            <div className="flex border-b border-white/5 bg-black/20">
              <button 
                onClick={() => setActiveTab('date')}
                className={`flex-1 py-4 text-xs font-bold tracking-widest uppercase transition-all ${activeTab === 'date' ? 'bg-moonlight-violet text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]' : 'text-gray-500 hover:text-white'}`}
              >
                Fecha
              </button>
              <button 
                onClick={() => setActiveTab('visit')}
                className={`flex-1 py-4 text-xs font-bold tracking-widest uppercase transition-all ${activeTab === 'visit' ? 'bg-moonlight-violet text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]' : 'text-gray-500 hover:text-white'}`}
              >
                Visita
              </button>
              <button 
                onClick={() => setActiveTab('general')}
                className={`flex-1 py-4 text-xs font-bold tracking-widest uppercase transition-all ${activeTab === 'general' ? 'bg-moonlight-violet text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]' : 'text-gray-500 hover:text-white'}`}
              >
                Mensaje
              </button>
            </div>

            <div className="p-8 flex-grow relative z-10">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fadeUp">
                  <div className="w-16 h-16 bg-transparent border-2 border-moonlight-gold rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-moonlight-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">¡Solicitud Enviada!</h3>
                  <p className="text-gray-400">Nuestro equipo de concierge le contactará a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 animate-fadeUp">
                  
                  {/* Common Fields */}
                  <div className="grid grid-cols-2 gap-5">
                    <div className="relative">
                        <input required type="text" className="peer w-full bg-black/30 border-b border-white/10 px-0 py-2 text-white placeholder-transparent focus:outline-none focus:border-moonlight-violet transition-colors" placeholder="Nombre" id="name" />
                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-moonlight-violet peer-focus:text-xs">Nombre</label>
                    </div>
                    <div className="relative">
                        <input required type="text" className="peer w-full bg-black/30 border-b border-white/10 px-0 py-2 text-white placeholder-transparent focus:outline-none focus:border-moonlight-violet transition-colors" placeholder="Apellido" id="lastname" />
                         <label htmlFor="lastname" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-moonlight-violet peer-focus:text-xs">Apellido</label>
                    </div>
                  </div>
                  <div className="relative pt-2">
                     <input required type="email" className="peer w-full bg-black/30 border-b border-white/10 px-0 py-2 text-white placeholder-transparent focus:outline-none focus:border-moonlight-violet transition-colors" placeholder="Email" id="email" />
                     <label htmlFor="email" className="absolute left-0 -top-1.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-1.5 peer-focus:text-moonlight-violet peer-focus:text-xs">Email</label>
                  </div>

                  {/* Tab Specific Fields */}
                  {activeTab === 'date' && (
                    <div className="bg-black/20 p-5 border border-white/5 rounded-xl space-y-4">
                      <p className="text-xs text-moonlight-violet uppercase tracking-widest mb-2 font-bold">Detalles del Evento</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Fecha</label>
                          <input required type="date" className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-moonlight-violet transition-colors [color-scheme:dark]" />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Invitados</label>
                          <input required type="number" min="50" max="500" placeholder="50-500" className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-moonlight-violet transition-colors" />
                        </div>
                      </div>
                      <select className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-gray-300 focus:outline-none focus:border-moonlight-violet transition-colors appearance-none">
                        <option>Tipo de Evento...</option>
                        <option>Eventos infantiles</option>
                        <option>15 Años</option>
                        <option>Bodas</option>
                        <option>Egresados</option>
                      </select>
                    </div>
                  )}

                  {activeTab === 'visit' && (
                     <div className="bg-black/20 p-5 border border-white/5 rounded-xl space-y-4">
                     <p className="text-xs text-moonlight-violet uppercase tracking-widest mb-2 font-bold">Agendar Recorrido</p>
                       <div className="grid grid-cols-2 gap-4">
                         <div>
                           <label className="block text-xs text-gray-500 mb-1">Fecha Preferida</label>
                           <input required type="date" className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-moonlight-violet transition-colors [color-scheme:dark]" />
                         </div>
                         <div>
                           <label className="block text-xs text-gray-500 mb-1">Horario</label>
                           <select className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-moonlight-violet transition-colors appearance-none">
                             <option>10:00 AM</option>
                             <option>12:00 PM</option>
                             <option>04:00 PM</option>
                             <option>06:00 PM</option>
                           </select>
                         </div>
                       </div>
                     </div>
                  )}

                  <div className="relative pt-2">
                    <textarea rows={2} className="peer w-full bg-black/30 border-b border-white/10 px-0 py-2 text-white placeholder-transparent focus:outline-none focus:border-moonlight-violet transition-colors resize-none" placeholder="Mensaje" id="message"></textarea>
                    <label htmlFor="message" className="absolute left-0 -top-1.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-1.5 peer-focus:text-moonlight-violet peer-focus:text-xs">
                        {activeTab === 'general' ? 'Escribe tu mensaje...' : 'Comentarios Adicionales'}
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-gradient-to-r from-moonlight-gold to-moonlight-gold-dark hover:from-white hover:to-white text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center uppercase tracking-widest text-xs shadow-lg hover:shadow-xl"
                  >
                    {formStatus === 'submitting' ? (
                       <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                       <span className="flex items-center gap-2">
                         {activeTab === 'visit' ? 'Confirmar Visita' : 'Enviar Consulta'}
                         <SendIcon className="w-4 h-4" />
                       </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Moonlight Eventos.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-moonlight-violet transition-colors">Instagram</a>
            <a href="#" className="hover:text-moonlight-violet transition-colors">Facebook</a>
            <a href="#" className="hover:text-moonlight-violet transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;