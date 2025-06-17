import React from 'react';
import { Code, Brain, Cloud, Database, Github, Monitor } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} className="text-blue-400" />,
      skills: ["Python", "Java"],
      color: "border-blue-400/30 bg-blue-400/10"
    },
    {
      title: "AI/ML Frameworks & Libraries",
      icon: <Brain size={24} className="text-purple-400" />,
      skills: ["PyTorch", "Hugging Face", "Scikit-learn", "TensorFlow"],
      color: "border-purple-400/30 bg-purple-400/10"
    },
    {
      title: "Core AI Concepts",
      icon: <Brain size={24} className="text-green-400" />,
      skills: ["Machine Learning", "Deep Learning"],
      color: "border-green-400/30 bg-green-400/10"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud size={24} className="text-cyan-400" />,
      skills: ["AWS", "Azure", "Google Cloud Platform"],
      color: "border-cyan-400/30 bg-cyan-400/10"
    },
    {
      title: "Databases",
      icon: <Database size={24} className="text-orange-400" />,
      skills: ["SQL"],
      color: "border-orange-400/30 bg-orange-400/10"
    },
    {
      title: "Tools & Version Control",
      icon: <Github size={24} className="text-red-400" />,
      skills: ["Git (GitHub)", "VS Code"],
      color: "border-red-400/30 bg-red-400/10"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical proficiency spans a range of cutting-edge tools and platforms essential for developing robust AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`glass-card rounded-2xl p-6 fade-in stagger-${index + 1}`}>
              <div className="flex items-center mb-6">
                <div className="glass rounded-full p-3 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-tag px-3 py-2 rounded-full text-sm font-medium ${category.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Monitor size={32} className="text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold">Continuous Learning</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              As AI technology rapidly evolves, I'm committed to staying at the forefront of innovation. 
              I continuously expand my skill set through hands-on projects, research, and exploration of emerging technologies 
              to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;