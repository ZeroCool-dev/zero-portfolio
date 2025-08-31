import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Government Technology Solutions',
      location: 'Malaysia',
      period: '2022 - Present',
      description: 'Leading development of critical government platforms including APPIMR and APPISR for the Ministry of Education, serving thousands of users daily.',
      achievements: [
        'Architected scalable education management systems',
        'Implemented security protocols for sensitive data',
        'Led team of 5 developers in agile environment',
        'Reduced system response time by 40%'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Enterprise Solutions Provider',
      location: 'Malaysia',
      period: '2020 - 2022',
      description: 'Developed enterprise applications and cloud platforms, focusing on business process automation and digital transformation.',
      achievements: [
        'Built cloud-native applications serving 10k+ users',
        'Integrated third-party APIs and payment systems',
        'Optimized database performance and scalability',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Tech Startup',
      location: 'Malaysia',
      period: '2019 - 2020',
      description: 'Contributed to innovative web applications and mobile solutions, gaining experience in rapid prototyping and startup culture.',
      achievements: [
        'Developed MVP applications from concept to deployment',
        'Collaborated with cross-functional teams',
        'Implemented responsive design patterns',
        'Participated in technology stack decisions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline Dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full hidden md:block"></div>

                <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-indigo-400/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-lg text-indigo-300 font-medium">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;