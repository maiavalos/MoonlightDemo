import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="bg-moonlight-dark min-h-screen text-slate-200 antialiased selection:bg-violet-500 selection:text-white">
      <Navbar />
      <main>
        <Hero id="home" />
        <Services id="services" />
        <Gallery id="gallery" />
        <Testimonials id="testimonials" />
        <Contact id="contact" />
      </main>
      <AIChat />
    </div>
  );
};

export default App;