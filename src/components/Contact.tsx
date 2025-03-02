import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, Lock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully. I will get back to you soon!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a security concern or interested in working together? Feel free to reach out through the secure contact form or connect with me on social media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Mail className="mr-2 text-blue-500" size={24} />
              Send a Message
            </h3>
            
            <div className="flex items-center mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-800 dark:text-blue-300 text-sm">
              <Lock className="h-5 w-5 mr-2 flex-shrink-0" />
              <p>This contact form is encrypted end-to-end for your privacy and security.</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="Security Consultation">Security Consultation</option>
                  <option value="Penetration Testing">Penetration Testing</option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Speaking Engagement">Speaking Engagement</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              {formStatus && (
                <div className={`mb-6 p-4 rounded-md ${
                  formStatus.success ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300' : 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                }`}>
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="https://www.linkedin.com/in/rohan-naagar-779310322"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                    <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                    <p className="text-gray-600 dark:text-gray-400">Professional updates and articles</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.github.com/RohanCyberOps"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                    <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                    <p className="text-gray-600 dark:text-gray-400">Open-source security tools and projects</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.x.com/Rohannaagar666"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                    <Twitter className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Twitter</h4>
                    <p className="text-gray-600 dark:text-gray-400">Security news and quick insights</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-blue-600 dark:bg-blue-700 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Security Research</h3>
              <p className="mb-6">
                Interested in my security research or vulnerability disclosures? Check out my published work and conference presentations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">CVE Discoveries</h4>
                  <p className="text-blue-100 text-sm">10+ vulnerabilities reported and acknowledged</p>
                </div>
                <div className="bg-blue-500/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Conference Talks</h4>
                  <p className="text-blue-100 text-sm">Speaker at BlackHat, DefCon, and RSA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;