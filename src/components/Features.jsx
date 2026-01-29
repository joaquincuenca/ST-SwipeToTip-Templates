import React, { useEffect, useRef, useState } from 'react';
import { Zap, FileText, Users, Sparkles, Smartphone, Lock, Palette, TrendingUp } from 'lucide-react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Setup',
      description: 'Download and deploy in minutes. Pre-configured QR codes and tipping flows ready to use out of the box.',
      color: '#FF6B35',
      delay: '0.1s'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Full Documentation',
      description: 'Step-by-step guides, video tutorials, and best practices included with every template.',
      color: '#4ECDC4',
      delay: '0.2s'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Support',
      description: 'Join 5,000+ businesses using SwipeToTip. Get help from our active community and support team.',
      color: '#F7B731',
      delay: '0.3s'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Fully Customizable',
      description: 'Edit colors, fonts, and layouts. Match your brand identity in seconds with our easy customization.',
      color: '#C44569',
      delay: '0.4s'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Optimized',
      description: 'Perfect on any device. Responsive designs that work seamlessly on phones, tablets, and desktops.',
      color: '#A29BFE',
      delay: '0.5s'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Secure & Compliant',
      description: 'Built with security best practices. PCI-DSS compliant payment processing for peace of mind.',
      color: '#6C5CE7',
      delay: '0.6s'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Modern UI/UX',
      description: 'Beautiful, intuitive interfaces that customers love. Increase tips with delightful user experiences.',
      color: '#FD79A8',
      delay: '0.7s'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Analytics Ready',
      description: 'Track performance with built-in analytics. Understand tipping patterns and optimize your strategy.',
      color: '#00B894',
      delay: '0.8s'
    }
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent1 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent2 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-mono">Why Choose Our Templates</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our templates are built with industry best practices and come packed with
            features that make accepting tips effortless.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 card-hover ${
                isVisible ? 'fade-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? feature.delay : '0s',
                borderTop: `3px solid ${feature.color}`
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: `${feature.color}20`,
                  color: feature.color
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 md:p-12 inline-block max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-accent1">Transform</span> Your Business?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join thousands of businesses already using SwipeToTip templates to increase their earnings.
            </p>
            <button
              onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-accent1 to-accent3 hover:from-accent1/90 hover:to-accent3/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 neon-glow"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;