import React from 'react';
import Reveal from './Reveal';

const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'Java', 'SQL'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Scikit-learn', 'Ollama'],
  },
  {
    title: 'Web & Desktop',
    skills: ['React', 'Next.js', 'Electron', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Azure', 'Google Cloud', 'Supabase', 'Git'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Skills
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 75}>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium text-zinc-200 bg-white/5 border border-white/10 rounded-lg px-3.5 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
