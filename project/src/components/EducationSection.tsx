import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="glass rounded-full p-4 mr-6">
                  <GraduationCap size={40} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">California State University</h3>
                  <p className="text-xl text-blue-300 font-semibold">Bachelor of Computer Science</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-green-400" />
                    <div>
                      <p className="text-sm text-gray-400">Expected Graduation</p>
                      <p className="text-lg font-semibold">May 2027</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Current Status</p>
                      <p className="text-lg font-semibold">Junior Year Student</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <BookOpen size={20} className="text-orange-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-400">Focus Areas</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="skill-tag px-3 py-1 rounded-full text-sm">Artificial Intelligence</span>
                        <span className="skill-tag px-3 py-1 rounded-full text-sm">Machine Learning</span>
                        <span className="skill-tag px-3 py-1 rounded-full text-sm">Software Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Currently pursuing a comprehensive Computer Science education with a strong focus on AI and machine learning technologies. 
                  My academic journey is complemented by hands-on project development and real-world application of cutting-edge technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;