import React, { useState } from 'react';
import { Briefcase, ChevronRight, Shield, Lock, Server, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "SecureNet Vulnerability Scanner",
      description: "An advanced network vulnerability scanner that identifies security weaknesses in systems and applications. Built with Python and leveraging multiple security databases for comprehensive threat detection.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Network Security", "Vulnerability Assessment"],
      link: "#",
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 2,
      title: "CryptoGuard Encryption Tool",
      description: "A robust file encryption utility that uses AES-256 encryption to secure sensitive data. Features include password protection, secure key management, and tamper detection mechanisms.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Cryptography", "Data Protection", "C++"],
      link: "#",
      icon: <Lock className="h-6 w-6" />
    },
    {
      id: 3,
      title: "ThreatHunter Dashboard",
      description: "A real-time security monitoring dashboard that aggregates and visualizes security events from multiple sources. Helps security teams identify and respond to threats more efficiently.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Data Visualization", "SIEM"],
      link: "#",
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 4,
      title: "SecOps Automation Framework",
      description: "A comprehensive security operations automation framework that streamlines incident response, threat hunting, and security compliance tasks through orchestration and automation.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Automation", "Python", "Security Operations"],
      link: "#",
      icon: <Server className="h-6 w-6" />
    }
  ];

  const toggleProject = (id: number) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my cybersecurity projects, tools, and research contributions that help organizations strengthen their security posture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 ${
                activeProject === project.id ? 'ring-2 ring-blue-500 transform scale-[1.02]' : ''
              }`}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-600 rounded-lg text-white mr-3">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center transition-colors"
                  >
                    {activeProject === project.id ? 'View Less' : 'View Details'}
                    <ChevronRight className={`ml-1 h-5 w-5 transition-transform ${
                      activeProject === project.id ? 'rotate-90' : ''
                    }`} />
                  </button>
                  
                  <a 
                    href={project.link} 
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                  >
                    Demo
                  </a>
                </div>
                
                {activeProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Project Details</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                      <li>Implemented advanced security algorithms for threat detection</li>
                      <li>Utilized modern frameworks for responsive and secure UI</li>
                      <li>Integrated with multiple security APIs for comprehensive coverage</li>
                      <li>Deployed with CI/CD pipeline ensuring security at every stage</li>
                    </ul>
                    
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      The project leverages cutting-edge security technologies and follows industry best practices for secure development and deployment.
                    </p>
                    
                    <div className="flex justify-end">
                      <a 
                        href="#" 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center"
                      >
                        View Case Study
                        <ChevronRight className="ml-1 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500/20 transition-colors"
          >
            View All Projects
            <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;