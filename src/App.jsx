import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TemplateGrid from './components/TemplateGrid';
import Features from './components/Features';
import HowToUse from './components/HowToUse';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <Hero />
      <TemplateGrid />
      <Features />
      <HowToUse />
      <Footer />
    </div>
  );
}

export default App;