import React, { useEffect, useRef } from 'react';
import { ChevronDown, Brain, Code, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const brainIconRef = useRef<HTMLDivElement>(null);
  const featureButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      // Apply subtle 3D tilt effects
      if (brainIconRef.current) {
        const tiltX = yPercent * 5;
        const tiltY = xPercent * 5;
        brainIconRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }

      if (featureButtonsRef.current) {
        const buttons = featureButtonsRef.current.querySelectorAll('.feature-button');
        buttons.forEach((button, index) => {
          const tiltX = yPercent * (2 + index * 0.5);
          const tiltY = xPercent * (2 + index * 0.5);
          (button as HTMLElement).style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${index * 5}px)`;
        });
      }
    };

    const handleMouseLeave = () => {
      // Reset transforms when mouse leaves
      if (brainIconRef.current) {
        brainIconRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
      if (featureButtonsRef.current) {
        const buttons = featureButtonsRef.current.querySelectorAll('.feature-button');
        buttons.forEach((button) => {
          (button as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
      document.body.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 25000);
    };

    // Create particles periodically
    const particleInterval = setInterval(createParticle, 3000);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-500/25 to-blue-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/25 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-br from-indigo-500/15 to-pink-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-cyan-400/15 to-blue-500/20 rounded-full blur-2xl floating-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in stagger-1">
          <div className="flex justify-center mb-8">
            <div 
              ref={brainIconRef}
              className="glass-hero-icon rounded-full p-6 mb-6 tilt-element"
              style={{ transition: 'transform 0.3s ease-out' }}
            >
              <Brain size={56} className="text-purple-400" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text-hero" style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'bold' }}>Sagan Chowdhury</span>
            <br />
            <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium">
              AI Engineer
            </span>
          </h1>
        </div>

        <div className="fade-in stagger-2">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Focused on Developing Robust, Production-Ready Utilities that{' '}
            <span className="gradient-text font-semibold">Transform the Digital Landscape</span>
          </p>
        </div>

        <div 
          ref={featureButtonsRef}
          className="fade-in stagger-3 flex flex-wrap justify-center gap-4"
        >
          <div className="feature-button rounded-full px-6 py-4 flex items-center space-x-3 tilt-element">
            <div className="feature-icon-wrapper">
              <Code size={20} className="feature-icon text-blue-400" />
            </div>
            <span className="text-sm font-medium">Full-Stack AI Development</span>
          </div>
          <div className="feature-button rounded-full px-6 py-4 flex items-center space-x-3 tilt-element">
            <div className="feature-icon-wrapper">
              <Sparkles size={20} className="feature-icon text-purple-400" />
            </div>
            <span className="text-sm font-medium">Innovation-Driven</span>
          </div>
          <div className="feature-button rounded-full px-6 py-4 flex items-center space-x-3 tilt-element">
            <div className="feature-icon-wrapper">
              <Brain size={20} className="feature-icon text-green-400" />
            </div>
            <span className="text-sm font-medium">Production-Ready Solutions</span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <div className="glass-minimal rounded-full p-2">
          <ChevronDown size={24} className="text-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;