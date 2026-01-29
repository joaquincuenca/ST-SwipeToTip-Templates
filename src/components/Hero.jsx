import React, { useEffect, useState } from 'react';
import { Download, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToTemplates = () => {
    document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent1/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent2/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent3/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(-${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            animationDelay: '4s',
          }}
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in stagger-1">
          <span className="gradient-text">Transform</span> Your
          <br />
          Tipping Experience
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto fade-in stagger-2">
          Download professional SwipeToTip templates designed for restaurants, cafés, and bars.
          Start accepting tips in minutes with our pre-built, customizable designs.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12 fade-in stagger-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent1">10+</div>
            <div className="text-gray-400 text-sm">Templates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent2">5,000+</div>
            <div className="text-gray-400 text-sm">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent3">24/7</div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in stagger-4">
          <button
            onClick={scrollToTemplates}
            className="group bg-accent1 hover:bg-accent1/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 neon-glow flex items-center justify-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Browse Templates</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://www.swipetotip.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>Visit Main Site</span>
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in stagger-5">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;