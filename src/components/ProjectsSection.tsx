import React from 'react';
import { Github, Folder, Wrench } from 'lucide-react';
import Reveal from './Reveal';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Alaka',
    tagline: 'Local-first AI chat for the desktop',
    description:
      'A desktop app for completely private AI conversations — no data ever leaves your machine. Bundles Ollama for offline inference, with multi-session chat, streaming responses, an in-app model manager, parameter tuning, and deep UI customization. Ships with a model ready to use on first launch.',
    tech: ['Electron', 'React', 'TypeScript', 'Ollama', 'Tailwind CSS'],
    github: 'https://github.com/Saganwazed/Alaka',
    featured: true,
  },
  {
    title: 'Candor Research',
    tagline: 'Full-stack research platform',
    description:
      'A Next.js web application with a Supabase backend and a companion browser extension, instrumented with product analytics and error monitoring for production use.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostHog', 'Sentry'],
    github: 'https://github.com/Saganwazed/Candor-Research',
  },
  {
    title: 'Edexcel Past-Paper Scraper',
    tagline: 'Study resources, automated',
    description:
      'A Python scraper that collects Edexcel A-Level Maths past papers and their solutions from across the web into one organized archive — built to make exam prep faster.',
    tech: ['Python', 'Web Scraping'],
    github: 'https://github.com/Saganwazed/Python-Scraper-for-Edexcel-A-Level-Maths-',
  },
];

const inProgress = [
  {
    name: 'AI Fitness Coach',
    note: 'A free app for personalized, AI-guided training.',
  },
  {
    name: 'AI-Guided Mindfulness',
    note: 'A free app for guided mindfulness and stress reduction.',
  },
];

const ProjectsSection = () => {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Projects
          </h2>
        </Reveal>

        {/* Featured project */}
        <Reveal>
          <a
            href={featured.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10 mb-8 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-accent">
                Featured project
              </span>
              <Github
                size={20}
                className="text-zinc-500 group-hover:text-white transition-colors"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {featured.title}
            </h3>
            <p className="text-zinc-500 mb-4">{featured.tagline}</p>
            <p className="text-zinc-400 leading-relaxed max-w-3xl mb-6">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        </Reveal>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <Folder size={22} className="text-accent" />
                  <Github
                    size={18}
                    className="text-zinc-500 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-3">{project.tagline}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Currently building */}
        <Reveal>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-7">
            <div className="flex items-center gap-3 mb-4">
              <Wrench size={18} className="text-zinc-500" />
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Currently building
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {inProgress.map((item) => (
                <div key={item.name}>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
