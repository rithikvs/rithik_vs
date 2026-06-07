import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to make navbar background translucent
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section during scroll
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'achievements', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Education', path: '#education' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Certifications', path: '#certifications' },
    { name: 'Achievements', path: '#achievements' },
    { name: 'Contact', path: '#contact' }
  ];

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(path);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled 
            ? 'bg-black/85 py-4 backdrop-blur-md border-b border-white/5 shadow-lg' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-white text-2xl font-black tracking-tight hover:scale-[1.02] transform transition-transform">
            Rithik V S<span className="text-[#ff2a2a]">.</span>
          </a>
        </div>

        {/* Right Side: Desktop Menu Links and Button */}
        <div className="hidden xl:flex items-center gap-10">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.path.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`font-semibold relative group transition-colors duration-300 py-1 ${
                    isActive ? 'text-white font-bold' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Smooth hover/active underline */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-8 py-3.5 rounded-full bg-black/80 hover:bg-black border border-white/30 text-white font-bold text-base hover:shadow-[0_0_25px_rgba(255,42,42,0.3)] transition-all duration-300 backdrop-blur-md hover:scale-105 transform"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="xl:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`xl:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] py-6 opacity-100 bg-[#ff2a2a] shadow-2xl border-t border-white/10' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`font-bold text-lg border-b border-white/20 pb-2 transition-colors ${
                  isActive ? 'text-black font-black' : 'text-white hover:text-black'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4 pb-2">
             <a 
               href="#contact" 
               onClick={(e) => handleLinkClick(e, '#contact')}
               className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
