import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'APPIMR - Ministry of Education',
      description: 'Comprehensive educational management system for the Malaysian Ministry of Education, handling student records, assessments, and administrative workflows.',
      url: 'https://appimr.moe.gov.my',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/appimr.png',
      category: 'Government Platform',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      features: ['Student Management', 'Assessment System', 'Administrative Dashboard']
    },
    {
      title: 'APPISR - Education System',
      description: 'Advanced educational information system for streamlined academic administration and student information management.',
      url: 'https://appisr.moe.gov.my',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/appisr.png',
      category: 'Government Platform',
      technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
      features: ['Academic Records', 'Reporting System', 'Multi-user Access']
    },
    {
      title: 'ELP - E-Learning Platform',
      description: 'Modern e-learning platform for the Ministry of Education, facilitating online education and digital learning resources.',
      url: 'https://elp.moe.gov.my',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/elp.png',
      category: 'Education Technology',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: ['Course Management', 'Interactive Learning', 'Progress Tracking']
    },
    {
      title: 'AsiaPadu',
      description: 'Enterprise-level business management platform providing comprehensive solutions for organizational efficiency and productivity.',
      url: 'https://asiapadu.com.my',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/apsb.png',
      category: 'Enterprise Solution',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Docker'],
      features: ['Business Analytics', 'Workflow Management', 'Real-time Dashboard']
    },
    {
      title: 'ROSSA Cloud Platform',
      description: 'Sophisticated cloud-based application providing scalable infrastructure and management tools for enterprise clients.',
      url: 'https://rossa.apsbcloud.net',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/rossa.png',
      category: 'Cloud Platform',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
      features: ['Cloud Infrastructure', 'API Management', 'Monitoring Tools']
    },
    {
      title: 'KampungKita Community',
      description: 'Community-driven platform connecting neighborhoods and fostering local engagement through digital innovation.',
      url: 'https://kampungkita.net',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/kampungkita.png',
      category: 'Community Platform',
      technologies: ['Next.js', 'React', 'MySQL', 'Tailwind CSS'],
      features: ['Community Forums', 'Event Management', 'Local News']
    },
    {
      title: 'Visitor Pass Management',
      description: 'Streamlined visitor management system for secure access control and efficient guest registration processes.',
      url: 'https://visitor-pass.apsbcloud.net',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/sdp.png',
      category: 'Security System',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
      features: ['Access Control', 'Digital Passes', 'Security Logs']
    },
    {
      title: 'CAS2 Laboratory System',
      description: 'Advanced laboratory management system for research facilities, handling equipment, experiments, and data analysis.',
      url: 'https://cas2-lab.apsbcloud.net',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/cas2.png',
      category: 'Laboratory System',
      technologies: ['React', 'Python', 'PostgreSQL', 'FastAPI'],
      features: ['Equipment Tracking', 'Experiment Management', 'Data Analysis']
    },
    {
      title: 'Padurus Platform',
      description: 'Innovative business platform providing comprehensive tools for digital transformation and operational excellence.',
      url: 'https://padurus.io',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/padurus.png',
      category: 'Business Platform',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      features: ['Business Intelligence', 'Process Automation', 'Analytics']
    },
    {
      title: 'Padurus App',
      description: 'Mobile-first application complementing the Padurus platform with enhanced user experience and mobile-specific features.',
      url: 'https://app.padurus.io',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/padurus-app.png',
      category: 'Web Application',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
      features: ['Mobile Optimization', 'Offline Support', 'Push Notifications']
    },
    {
      title: 'Saham2U Investment',
      description: 'Financial technology platform for investment management and market analysis, serving Malaysian investors.',
      url: 'https://saham2u.com.my',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/saham2u.png',
      category: 'FinTech',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      features: ['Portfolio Management', 'Market Analysis', 'Trading Tools']
    },
    {
      title: 'Dr. Charlotte Joseph',
      description: 'Professional medical practice website featuring appointment booking, patient resources, and comprehensive healthcare information.',
      url: 'https://drcharlottejoseph.com/',
      image: 'https://pub-ba1dca2382b041498de8445523c682c2.r2.dev/drcharlete.png',
      category: 'Healthcare Website',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Custom CSS'],
      features: ['Appointment System', 'Patient Portal', 'Medical Resources']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of production applications I've built across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-indigo-400/50 transition-all duration-300 transform hover:scale-105 group shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm text-indigo-300 font-medium">{project.category}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;