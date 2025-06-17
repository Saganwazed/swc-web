import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Bell, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact & <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm always eager to connect with fellow innovators, discuss new ideas, and explore opportunities to 
            transform the digital landscape with AI. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Mail size={28} className="text-blue-400 mr-3" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <a
                  href="http://linkedin.com/in/sagan-chowdhury-52774b1b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 glass-card rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="glass rounded-full p-3">
                    <Linkedin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">LinkedIn</h4>
                    <p className="text-gray-300 group-hover:text-blue-300 transition-colors">
                      Connect professionally
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Saganwazed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 glass-card rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="glass rounded-full p-3">
                    <Github size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">GitHub</h4>
                    <p className="text-gray-300 group-hover:text-purple-300 transition-colors">
                      Explore my code
                    </p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 glass-card rounded-xl p-4">
                  <div className="glass rounded-full p-3">
                    <Mail size={24} className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-300">
                      sagan.chowdhury@email.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Sparkles size={24} className="text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold">Let's Build Something Amazing</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Whether you're interested in collaboration, have questions about AI development, 
                or want to discuss innovative project ideas, I'd love to hear from you. 
                Let's shape the future of technology together!
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="glass rounded-full p-3 mr-4">
                  <Bell size={28} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Stay Updated!</h3>
              </div>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Be the first to know when my revolutionary{' '}
                <span className="gradient-text font-semibold">AI Fitness App</span> and{' '}
                <span className="gradient-text font-semibold">AI-Guided Mindfulness App</span> launch! 
                These completely free utilities are set to redefine their categories.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 newsletter-input rounded-xl text-white placeholder-gray-400"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full btn-primary px-6 py-3 rounded-xl font-semibold text-white flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? (
                    <>
                      <span>✓ Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Subscribe to Updates</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 rounded-full text-sm border-green-400/30 bg-green-400/10">
                  🚀 Launch Alerts
                </span>
                <span className="skill-tag px-3 py-1 rounded-full text-sm border-blue-400/30 bg-blue-400/10">
                  💡 Behind-the-Scenes
                </span>
                <span className="skill-tag px-3 py-1 rounded-full text-sm border-purple-400/30 bg-purple-400/10">
                  🎯 Exclusive Updates
                </span>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                No spam, just exciting updates about revolutionary AI applications. 
                Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Sagan Chowdhury. Crafted with passion for AI innovation.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="http://linkedin.com/in/sagan-chowdhury-52774b1b6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Saganwazed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:sagan.chowdhury@email.com"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;