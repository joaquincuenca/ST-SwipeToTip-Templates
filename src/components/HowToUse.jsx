import React, { useEffect, useRef, useState } from 'react';
import { Download, Settings, Rocket, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const HowToUse = () => {
  const [activeStep, setActiveStep] = useState(0);
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

  const steps = [
    {
      number: '01',
      icon: <Download className="w-8 h-8" />,
      title: 'Download Your Template',
      description: 'Browse our collection and download your preferred template. Each package includes all necessary files and assets.',
      details: [
        'HTML, CSS, and JavaScript files',
        'High-quality images and icons',
        'QR code templates',
        'Setup documentation'
      ],
      color: '#FF6B35'
    },
    {
      number: '02',
      icon: <Settings className="w-8 h-8" />,
      title: 'Customize & Configure',
      description: 'Open the files and customize colors, text, and branding to match your business identity using our simple guide.',
      details: [
        'Edit colors and fonts',
        'Add your logo and branding',
        'Configure payment settings',
        'Adjust tip amounts'
      ],
      color: '#4ECDC4'
    },
    {
      number: '03',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Deploy & Launch',
      description: 'Upload to your hosting or use our recommended platforms. Generate QR codes and display them at your venue.',
      details: [
        'Upload to web hosting',
        'Generate unique QR codes',
        'Print display materials',
        'Test payment flow'
      ],
      color: '#F7B731'
    },
    {
      number: '04',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Receive Tips & Grow',
      description: 'Start receiving tips instantly! Monitor performance through your dashboard and optimize based on analytics.',
      details: [
        'Real-time tip notifications',
        'Analytics dashboard access',
        'Performance insights',
        'Continuous optimization'
      ],
      color: '#C44569'
    }
  ];

  return (
    <section
      id="how-to-use"
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent2/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent1/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started in 4 simple steps. From download to deployment in less than 30 minutes.
          </p>
        </div>

        <div className="hidden lg:block mb-20">
          <div className="relative">
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent1 via-accent2 via-accent3 to-accent4" />
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div
                    className="w-48 h-48 mx-auto rounded-full flex items-center justify-center mb-8 glass relative z-10 transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: `${step.color}20`,
                      border: `3px solid ${step.color}`
                    }}
                  >
                    <div style={{ color: step.color }}>
                      {step.icon}
                    </div>
                  </div>

                  <div
                    className="absolute top-0 right-0 w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                    
                    {activeStep === index && (
                      <div className="glass rounded-xl p-4 mt-4 animate-slide-up">
                        <ul className="space-y-2 text-left text-sm">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                              <span className="text-gray-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`glass rounded-2xl overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <button
                onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                className="w-full p-6 flex items-center space-x-4 text-left"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${step.color}20`,
                    color: step.color
                  }}
                >
                  {step.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span
                      className="font-mono font-bold px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>

                <ArrowRight
                  className={`w-6 h-6 transition-transform ${
                    activeStep === index ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {activeStep === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-white/10 pt-4">
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Need help? Check out our comprehensive documentation and video tutorials.
          </p>
          <button className="glass hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center space-x-2">
            <span>View Documentation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;