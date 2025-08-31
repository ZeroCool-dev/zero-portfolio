import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Bootstrap', level: 100, color: 'from-blue-400 to-blue-600' },
        { name: 'Tailwind', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'React', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', level: 90, color: 'from-blue-500 to-indigo-600' },
        { name: 'Next.js', level: 88, color: 'from-gray-400 to-gray-600' },
        { name: 'Vue.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-cyan-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500' },
        { name: 'Angular', level: 95, color: 'from-orange-400 to-red-500' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'PHP', level: 88, color: 'from-purple-400 to-purple-600' },
        { name: 'Python', level: 82, color: 'from-yellow-400 to-blue-500' },
        { name: 'Laravel', level: 100, color: 'from-red-400 to-red-600' },
        { name: 'Node.js', level: 90, color: 'from-green-500 to-green-700' },
        { name: 'Django', level: 87, color: 'from-gray-500 to-gray-700' },
        { name: 'Ionic', level: 95, color: 'from-gray-500 to-gray-700' },
        { name: 'Express.js', level: 87, color: 'from-gray-500 to-gray-700' },
        { name: 'Flask', level: 87, color: 'from-gray-500 to-gray-700' },
        { name: 'REST APIs', level: 93, color: 'from-indigo-400 to-purple-500' }
      ]
    },
    {
      title: 'Database & DevOps',
      skills: [
        { name: 'MySQL', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'PostgreSQL', level: 85, color: 'from-blue-600 to-indigo-700' },
        { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'SQLite', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'noSQL', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'Docker', level: 78, color: 'from-blue-400 to-blue-600' },
        { name: 'AWS', level: 75, color: 'from-orange-400 to-orange-600' },
        { name: 'Linode', level: 75, color: 'from-orange-400 to-orange-600' },
        { name: 'Azure', level: 75, color: 'from-orange-400 to-orange-600' },
        { name: 'Google Cloud Platform', level: 75, color: 'from-orange-400 to-orange-600' },
        { name: 'Git', level: 92, color: 'from-red-400 to-red-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on development experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-indigo-400/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;