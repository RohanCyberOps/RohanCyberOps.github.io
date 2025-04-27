import React from 'react';
import { Shield, Lock, AlertTriangle, BookOpen, Server } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Lock className="h-8 w-8 text-blue-500 dark:text-blue-400" aria-hidden="true" />,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities in your systems before malicious actors do. Includes web applications, networks, and infrastructure testing.",
      features: [
        "Web Application Testing",
        "Network Infrastructure Assessment",
        "Mobile App Security Testing",
        "API Security Assessment",
        "Social Engineering Tests"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500 dark:text-blue-400" aria-hidden="true" />,
      title: "Security Audits",
      description: "Thorough evaluation of your organization's security posture against industry standards and best practices. Includes compliance checks and risk assessment.",
      features: [
        "Compliance Assessment",
        "Security Controls Review",
        "Risk Assessment",
        "Policy Review",
        "Security Architecture Review"
      ]
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-blue-500 dark:text-blue-400" aria-hidden="true" />,
      title: "Incident Response",
      description: "Rapid response to security incidents with a focus on containment, eradication, and recovery. Includes post-incident analysis and recommendations.",
      features: [
        "24/7 Emergency Response",
        "Malware Analysis",
        "Forensic Investigation",
        "Threat Hunting",
        "Incident Documentation"
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500 dark:text-blue-400" aria-hidden="true" />,
      title: "Security Training",
      description: "Custom security awareness and technical training programs designed to build a security-conscious culture in your organization.",
      features: [
        "Security Awareness Training",
        "Phishing Simulations",
        "Developer Security Training",
        "Incident Response Drills",
        "Executive Security Briefings"
      ]
    },
    {
      icon: <Server className="h-8 w-8 text-blue-500 dark:text-blue-400" aria-hidden="true" />,
      title: "Security Architecture",
      description: "Design and implementation of robust security architectures that protect your assets while enabling business operations.",
      features: [
        "Zero Trust Architecture",
        "Cloud Security Design",
        "Network Segmentation",
        "Access Control Systems",
        "Security Controls Implementation"
      ]
    }
  ];

  return (
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Security <span className="text-blue-500 dark:text-blue-400">Services</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 dark:bg-blue-400 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity services to protect your organization from evolving threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
                <div
                    key={service.title}
                    className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="text-blue-500 dark:text-blue-400 mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-center text-gray-700 dark:text-gray-300"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mr-2"></span>
                          {feature}
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Services;