import React from 'react';
import { Shield, Code, Server, Globe, Award } from 'lucide-react';

interface Certification {
  name: string;
  organization: string;
  year: string;
}

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

const Skills: React.FC = () => {
  const certifications: Certification[] = [
    { name: "Certified Ethical Hacker (CEH)", organization: "EC-Council", year: "2019" },
    { name: "Certified Information Systems Security Professional (CISSP)", organization: "ISC²", year: "2020" },
    { name: "Offensive Security Certified Professional (OSCP)", organization: "Offensive Security", year: "2021" },
    { name: "Certified Information Security Manager (CISM)", organization: "ISACA", year: "2022" },
    { name: "CompTIA Security+", organization: "CompTIA", year: "2018" }
  ];

  const skills: SkillGroup[] = [
    {
      category: "Security Tools",
      icon: <Shield className="text-blue-500" size={20} />,
      items: ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Kali Linux", "OWASP ZAP"]
    },
    {
      category: "Programming",
      icon: <Code className="text-blue-500" size={20} />,
      items: ["Python", "Bash", "JavaScript", "Go", "PowerShell", "SQL"]
    },
    {
      category: "Cloud Security",
      icon: <Server className="text-blue-500" size={20} />,
      items: ["AWS Security", "Azure Security", "GCP Security", "Docker Security", "Kubernetes Security"]
    },
    {
      category: "Methodologies",
      icon: <Globe className="text-blue-500" size={20} />,
      items: ["OWASP Top 10", "MITRE ATT&CK", "ISO 27001", "NIST Cybersecurity Framework"]
    }
  ];

  return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Skills & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 dark:bg-blue-400 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technical expertise and professional certifications in cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Code className="mr-2 text-blue-500" size={24} />
                Technical Expertise
              </h3>

              <div className="space-y-6">
                {skills.map((skillGroup) => (
                    <div
                        key={skillGroup.category}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
                    >
                      <div className="flex items-center mb-4">
                        {skillGroup.icon}
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white ml-2">
                          {skillGroup.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
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
                Professional Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                    <div
                        key={cert.name}
                        className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">{cert.organization}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {cert.year}
                    </span>
                      </div>
                    </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl shadow-lg text-white">
                <div className="flex items-center mb-3">
                  <Award className="mr-2 text-blue-200" size={20} />
                  <h4 className="text-xl font-bold">Continuous Learning</h4>
                </div>
                <p className="mb-4 text-blue-100">
                  Committed to staying ahead of emerging threats through continuous education and research.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Threat Intelligence", "Zero-Day Research", "CTF Competitions", "Security Conferences"].map((item) => (
                      <span
                          key={item}
                          className="px-3 py-1 bg-blue-500/40 rounded-full text-sm font-medium hover:bg-blue-500/60 transition-colors"
                      >
                    {item}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;