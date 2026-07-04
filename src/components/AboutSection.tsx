import React from 'react';
import Reveal from './Reveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            About
          </h2>
        </Reveal>

        <Reveal>
          <div className="max-w-3xl space-y-5 text-lg text-zinc-400 leading-relaxed">
            <p>
              I'm a junior studying Computer Science at California State
              University, with a focus on machine learning and full-stack
              development. I got into AI because I like solving real problems,
              and this is the most interesting toolbox available right now.
            </p>
            <p>
              Outside of coursework, I spend most of my time building — a
              local-first AI chat app for the desktop, a full-stack research
              platform, and scrapers and utilities that solve problems I've run
              into myself. I care about privacy, good user experience, and
              writing software that works reliably, not just in a demo.
            </p>
            <p>
              Right now I'm developing two free consumer apps — an AI fitness
              coach and an AI-guided mindfulness app — and I'm always open to
              interesting collaborations.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
