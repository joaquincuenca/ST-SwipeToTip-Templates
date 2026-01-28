import React, { useState } from 'react';
import { Download, Eye, CheckCircle } from 'lucide-react';

const TemplateGrid = () => {
  const [downloadedTemplates, setDownloadedTemplates] = useState([]);

  const templates = [
    {
      id: 1,
      name: 'Restaurant Premium',
      category: 'Food & Beverage',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80',
      downloads: '2.4k',
      color: '#FF6B35',
      description: 'Elegant design perfect for upscale dining establishments',
      features: ['QR Code Integration', 'Multi-language Support', 'Custom Branding']
    },
    {
      id: 2,
      name: 'Coffee Shop Minimal',
      category: 'Café & Bistro',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&q=80',
      downloads: '1.8k',
      color: '#4ECDC4',
      description: 'Clean, modern design for coffee shops and casual cafés',
      features: ['Mobile Optimized', 'Quick Setup', 'Social Media Integration']
    },
    {
      id: 3,
      name: 'Bar & Lounge Dark',
      category: 'Nightlife',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop&q=80',
      downloads: '1.5k',
      color: '#C44569',
      description: 'Bold, vibrant theme for bars and nightlife venues',
      features: ['Dark Mode', 'Animated Effects', 'Event Integration']
    },
    {
      id: 4,
      name: 'Fine Dining Elegant',
      category: 'Upscale Dining',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&q=80',
      downloads: '2.1k',
      color: '#F7B731',
      description: 'Sophisticated design for high-end restaurants',
      features: ['Luxury Aesthetics', 'Table Management', 'VIP Features']
    },
    {
      id: 5,
      name: 'Fast Food Modern',
      category: 'Quick Service',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop&q=80',
      downloads: '1.9k',
      color: '#F59E42',
      description: 'Fast, efficient design for quick-service restaurants',
      features: ['Speed Optimized', 'Counter Display', 'Order Integration']
    },
    {
      id: 6,
      name: 'Bakery Sweet',
      category: 'Bakery & Desserts',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop&q=80',
      downloads: '1.3k',
      color: '#FF8B94',
      description: 'Warm, inviting design for bakeries and dessert shops',
      features: ['Product Showcase', 'Recipe Cards', 'Sweet Animations']
    }
  ];

  const handleDownload = (template) => {
    // Simulate download
    setDownloadedTemplates([...downloadedTemplates, template.id]);
    
    // In a real scenario, this would trigger an actual file download
    setTimeout(() => {
      alert(`${template.name} template downloaded! Check your downloads folder.`);
    }, 500);
  };

  return (
    <section id="templates" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your <span className="gradient-text">Template</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional designs crafted for different business types. Each template includes
            everything you need to start accepting tips immediately.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className="group glass rounded-2xl overflow-hidden card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60" />
                
                {/* Download Count Badge */}
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-sm font-mono">
                  {template.downloads} downloads
                </div>

                {/* Category Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: template.color }}
                >
                  {template.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="glass px-6 py-3 rounded-full flex items-center space-x-2 transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                    <span>Preview</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{template.name}</h3>
                <p className="text-gray-400 mb-4">{template.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-white/5 rounded-full border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(template)}
                  disabled={downloadedTemplates.includes(template.id)}
                  className={`w-full py-3 rounded-full font-semibold transition-all flex items-center justify-center space-x-2 ${
                    downloadedTemplates.includes(template.id)
                      ? 'bg-green-500 text-white cursor-not-allowed'
                      : 'bg-accent1 hover:bg-accent1/90 text-white hover:scale-105'
                  }`}
                >
                  {downloadedTemplates.includes(template.id) ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Download Template</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Download All Button */}
        <div className="text-center mt-12">
          <button className="glass hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 inline-flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Download All Templates</span>
            <span className="text-accent3 ml-2">(Bundle)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplateGrid;