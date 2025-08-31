import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend Systems',
      description: 'Building robust APIs and database architectures'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Applications',
      description: 'Creating responsive and interactive user experiences'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile-First',
      description: 'Developing with mobile responsiveness as priority'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Building Digital Solutions That Matter
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate full-stack software developer with extensive experience in creating 
              robust web applications and digital platforms. My journey spans across government 
              projects, enterprise solutions, and innovative startups.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              With a strong foundation in both frontend and backend technologies, I specialize in 
              building scalable applications that deliver exceptional user experiences while 
              maintaining high performance and security standards.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">
                5+ Years Experience
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                11+ Projects Delivered
              </span>
              <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium">
                Government & Enterprise
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-700/50 p-6 rounded-xl backdrop-blur-sm border border-gray-600/30 hover:border-indigo-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-indigo-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;