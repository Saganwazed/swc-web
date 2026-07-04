import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center relative hero-glow"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8 w-full pt-16">
        <p className="text-accent font-medium mb-5 reveal is-visible">
          Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          Sagan Chowdhury
        </h1>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-500 mb-8">
          I build practical AI tools.
        </h2>

        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10">
          I'm a computer science student focused on AI engineering — from
          local-first desktop apps to full-stack web platforms. I care about
          shipping things people can actually use.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent-dim hover:bg-accent text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            View my work
            <ArrowDown size={16} />
          </a>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Saganwazed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="http://linkedin.com/in/sagan-chowdhury-52774b1b6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:saganwazed652@gmail.com"
              aria-label="Email"
              className="p-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
