import React from 'react';
import { GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            Education
          </h2>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10 max-w-3xl">
            <div className="flex items-start gap-5">
              <div className="rounded-xl bg-white/5 border border-white/10 p-3 shrink-0">
                <GraduationCap size={26} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  California State University
                </h3>
                <p className="text-zinc-400 mb-1">
                  B.S. Computer Science
                </p>
                <p className="text-sm text-zinc-500 mb-5">
                  Junior · Expected graduation May 2027
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Artificial Intelligence', 'Machine Learning', 'Software Engineering'].map(
                    (focus) => (
                      <span
                        key={focus}
                        className="text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                      >
                        {focus}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EducationSection;
