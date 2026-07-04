import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import Reveal from './Reveal';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">What's next?</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Get in touch
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              I'm open to internships, collaborations, and conversations about
              AI development. If you'd like to talk about a project or just say
              hi, my inbox is open.
            </p>
            <a
              href="mailto:saganwazed652@gmail.com"
              className="inline-flex items-center gap-2 bg-accent-dim hover:bg-accent text-white font-medium px-8 py-3.5 rounded-lg transition-colors"
            >
              <Mail size={18} />
              Say hello
            </a>
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="mt-28 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Sagan Chowdhury
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Saganwazed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="http://linkedin.com/in/sagan-chowdhury-52774b1b6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:saganwazed652@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
