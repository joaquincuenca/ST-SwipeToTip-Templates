import React from 'react';
import { Github, Twitter, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Templates', href: '#templates' },
      { name: 'Features', href: '#features' },
      { name: 'How to Use', href: '#how-to-use' },
      { name: 'Pricing', href: 'https://www.swipetotip.com/pricing' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Video Tutorials', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#' }
    ],
    company: [
      { name: 'About SwipeToTip', href: 'https://www.swipetotip.com/about' },
      { name: 'Blog', href: 'https://www.swipetotip.com/blog' },
      { name: 'Careers', href: 'https://www.swipetotip.com/careers' },
      { name: 'Contact', href: 'https://www.swipetotip.com/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: 'https://www.swipetotip.com/privacy' },
      { name: 'Terms of Service', href: 'https://www.swipetotip.com/terms' },
      { name: 'Cookie Policy', href: 'https://www.swipetotip.com/cookies' },
      { name: 'Licenses', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: '#' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:templates@swipetotip.com' }
  ];

  return (
    <footer className="bg-[#050815] pt-20 pb-8 px-6 mt-20">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent1 to-accent3 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ST</span>
              </div>
              <span className="text-xl font-bold">
                SwipeToTip <span className="text-accent1">Templates</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional tipping templates for modern businesses. Download, customize, and start
              accepting tips in minutes.
            </p>
            <a
              href="https://www.swipetotip.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-accent1 hover:text-accent1/80 transition-colors"
            >
              <span>Visit Main Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get notified when we release new templates and features.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-accent1"
              />
              <button className="bg-accent1 hover:bg-accent1/90 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center space-x-2">
            <span>© {currentYear} SwipeToTip Templates.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Extra Info */}
        <div className="text-center mt-8 text-gray-500 text-xs">
          <p>
            All templates are provided as-is and require customization. Payment processing through
            SwipeToTip platform.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;