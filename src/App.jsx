import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonial';
import ContactForm from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
