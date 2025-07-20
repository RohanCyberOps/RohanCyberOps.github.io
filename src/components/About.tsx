import React from 'react';
import { Shield, Lock, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Rohan Naagar
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate cybersecurity professional with over many years of experience in protecting digital assets and infrastructure from evolving threats. My expertise spans across penetration testing, vulnerability assessment, security architecture, and incident response.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Having worked with Fortune many companies and government agencies, I've developed a deep understanding of how to secure complex systems against sophisticated attacks while maintaining operational efficiency.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                My approach combines technical expertise with strategic thinking, allowing me to not only identify vulnerabilities but also implement comprehensive security solutions that align with business objectives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <Shield className="h-8 w-8 text-blue-500 mb-2" />
                  <h4 className="font-bold text-gray-900 dark:text-white">Security Audits</h4>
                  <p className="text-gray-600 dark:text-gray-400">Comprehensive security assessments</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <Lock className="h-8 w-8 text-blue-500 mb-2" />
                  <h4 className="font-bold text-gray-900 dark:text-white">Penetration Testing</h4>
                  <p className="text-gray-600 dark:text-gray-400">Ethical hacking to find vulnerabilities</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <Cpu className="h-8 w-8 text-blue-500 mb-2" />
                  <h4 className="font-bold text-gray-900 dark:text-white">Security Architecture</h4>
                  <p className="text-gray-600 dark:text-gray-400">Building secure systems from the ground up</p>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <p className="text-center text-gray-700 dark:text-gray-300 mb-2">
                  Scan QR code to view your profile
                </p>
                <div className="flex justify-center">
                  <img src="assets/Screenshot 2025-07-07 221545.png" alt="Profile QR Code" className="w-32 h-32" />
                  <div className="w-32 h-32 bg-gray-200 dark:bg-gray-600 flex items-center justify-center rounded">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">QR Code</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-xl border-2 border-blue-500 dark:border-blue-400 transform hover:scale-[1.02] transition-transform duration-300">
                <img
                    src="assets/WhatsApp Image 2025-07-20 at 20.45.55_b5a2a338.jpg"
                    alt="Cybersecurity Professional"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-blue-600 dark:bg-blue-500 text-white p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="font-mono text-sm">
                  <span className="text-blue-200">&gt;</span> Ethical Hacker<br />
                  <span className="text-blue-200">&gt;</span> Security Researcher<br />
                  <span className="text-blue-200">&gt;</span> Digital Guardian
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;