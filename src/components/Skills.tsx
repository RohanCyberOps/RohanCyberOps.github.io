import React from 'react';
import { Shield, Code, Server, Globe, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const certifications = [
    { name: "Certified Ethical Hacker (CEH)", organization: "EC-Council", year: "2019" },
    { name: "Certified Information Systems Security Professional (CISSP)", organization: "ISC²", year: "2020" },
    { name: "Offensive Security Certified Professional (OSCP)", organization: "Offensive Security", year: "2021" },
    { name: "Certified Information Security Manager (CISM)", organization: "ISACA", year: "2022" },
    { name: "CompTIA Security+", organization: "CompTIA", year: "2018" }
  ];

  const skills = [
    { category: "Security Tools", items: ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Kali Linux", "OWASP ZAP"] },
    { category: "Programming", items: ["Python", "Bash", "JavaScript", "Go", "PowerShell", "SQL"] },
    { category: "Cloud Security", items: ["AWS Security", "Azure Security", "GCP Security", "Docker Security", "Kubernetes Security"] },
    { category: "Methodologies", items: ["OWASP Top 10", "MITRE ATT&CK", "ISO 27001", "NIST Cybersecurity Framework"] }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Skills & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Code className="mr-2 text-blue-500" size={24} />
              Technical Expertise
            </h3>
            
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="mr-2 text-blue-500" size={24} />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{cert.organization}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-600 dark:bg-blue-700 rounded-lg shadow-lg text-white">
              <h4 className="text-xl font-bold mb-2">Continuous Learning</h4>
              <p className="mb-4">I believe in staying ahead of emerging threats through continuous education and research.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/50 rounded-full text-sm font-medium">Threat Intelligence</span>
                <span className="px-3 py-1 bg-blue-500/50 rounded-full text-sm font-medium">Zero-Day Research</span>
                <span className="px-3 py-1 bg-blue-500/50 rounded-full text-sm font-medium">CTF Competitions</span>
                <span className="px-3 py-1 bg-blue-500/50 rounded-full text-sm font-medium">Security Conferences</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;