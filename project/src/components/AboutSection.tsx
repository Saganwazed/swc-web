import React from 'react';
import { User, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <div className="glass rounded-full p-3 mr-4">
                <User size={24} className="text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold">My Journey</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              As a Junior at California State University, I am deeply driven by the challenge of solving complex problems and crafting innovative solutions through the power of AI. My approach is always centered on delivering the best possible results with a user-centric focus, ensuring that the technology I build is not only robust but also intuitive and impactful.
            </p>
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-xl p-6 flex items-start space-x-4">
              <div className="glass rounded-full p-2 mt-1">
                <Target size={20} className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">User-Centric Innovation</h4>
                <p className="text-gray-300">
                  Every solution I create prioritizes user experience and real-world impact, ensuring technology serves people effectively.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start space-x-4">
              <div className="glass rounded-full p-2 mt-1">
                <Zap size={20} className="text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Future-Forward Thinking</h4>
                <p className="text-gray-300">
                  Being part of the current AI boom as a Gen Z engineer is incredibly exciting—I'm passionate about contributing to and shaping the digital future with production-ready utilities that genuinely enhance how we interact with technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;