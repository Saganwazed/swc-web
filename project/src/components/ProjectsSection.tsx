import React from 'react';
import { Dumbbell, Brain, ExternalLink, Github, Clock } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI Fitness App",
      icon: <Dumbbell size={32} className="text-green-400" />,
      concept: "A state-of-the-art, completely free AI-powered fitness application designed to revolutionize personal training and health management.",
      innovation: "Built to be light years ahead of existing alternatives, focusing on intelligent user guidance and personalized experiences.",
      impact: "Empowering users with accessible, high-quality fitness insights and personalized training.",
      status: "Coming Soon",
      gradient: "from-green-400/20 to-blue-500/20"
    },
    {
      id: 2,
      title: "AI-Guided Mindfulness App",
      icon: <Brain size={32} className="text-purple-400" />,
      concept: "A revolutionary, completely free AI-driven mindfulness application aimed at enhancing mental well-being and stress reduction.",
      innovation: "Designed to surpass current offerings by providing intelligent, personalized guidance for mindfulness practices.",
      impact: "Making advanced mindfulness techniques accessible and effective for everyone.",
      status: "Coming Soon",
      gradient: "from-purple-400/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These are active projects I'm passionately developing, aiming to launch soon and redefine their respective digital spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`glass-card rounded-2xl p-8 relative overflow-hidden fade-in stagger-${index + 1}`}>
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="glass rounded-full p-3">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock size={16} className="text-yellow-400" />
                        <span className="text-sm text-yellow-400 font-medium">{project.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-blue-300">Concept</h4>
                    <p className="text-gray-300 leading-relaxed">{project.concept}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-purple-300">Innovation</h4>
                    <p className="text-gray-300 leading-relaxed">{project.innovation}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-300">Impact</h4>
                    <p className="text-gray-300 leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <div className="flex space-x-3">
                    <button className="glass rounded-full p-2 hover:bg-white/10 transition-all duration-300">
                      <ExternalLink size={18} className="text-gray-300" />
                    </button>
                    <button className="glass rounded-full p-2 hover:bg-white/10 transition-all duration-300">
                      <Github size={18} className="text-gray-300" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-400">Launching Soon</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Both applications will be <span className="gradient-text font-semibold">completely free</span> and designed to revolutionize their respective categories.
          </p>
          <div className="glass-card rounded-full px-8 py-3 inline-block">
            <span className="text-sm font-medium">🚀 Stay tuned for launch announcements!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;