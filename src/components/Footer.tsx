import React from 'react';
import { Shield, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    // Navigation data
    const quickLinks = [
        { href: "#about", label: "About Me" },
        { href: "#skills", label: "Skills & Certifications" },
        { href: "#projects", label: "Projects" },
        { href: "#blog", label: "Blog" },
        { href: "#contact", label: "Contact" }
    ];

    const services = [
        { href: "#services", label: "Penetration Testing" },
        { href: "#services", label: "Security Audits" },
        { href: "#services", label: "Incident Response" },
        { href: "#services", label: "Security Training" },
        { href: "#services", label: "Security Architecture" }
    ];

    const legalLinks = [
        { href: "#LegalPage", label: "Privacy Policy" },
        { href: "#LegalPage", label: "Terms of Service" },
        { href: "#LegalPage", label: "Cookie Policy" }
    ];

    const socialLinks = [
        {
            href: "https://www.facebook.com/rohannaagar66",
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
            ),
            label: "Facebook"
        },
        {
            href: "https://www.x.com/rohannaagar666",
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
            label: "Twitter"
        },
        {
            href: "https://www.github.com/rohancyberops",
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ),
            label: "GitHub"
        },
        {
            href: "https://discord.gg/YsYwZwEZ",
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.369A19.791 19.791 0 0 0 15.633 3c-.316.563-.599 1.144-.844 1.737a18.993 18.993 0 0 0-5.578 0 13.748 13.748 0 0 0-.844-1.737 19.791 19.791 0 0 0-4.684 1.369C2.841 8.212 2 12.013 2 15.785a19.919 19.919 0 0 0 6.086 4.229c.5-.687.947-1.414 1.335-2.173a12.5 12.5 0 0 1-1.999-.96c.167-.12.329-.25.482-.388 3.792 1.716 7.883 1.716 11.674 0 .154.138.316.268.482.388a12.5 12.5 0 0 1-1.999.96c.388.76.835 1.486 1.335 2.173A19.919 19.919 0 0 0 22 15.785c0-3.772-.841-7.573-1.683-11.416ZM9.069 14.323c-1.185 0-2.153-1.086-2.153-2.42 0-1.333.94-2.43 2.153-2.43 1.224 0 2.173 1.097 2.153 2.43-.02 1.334-.929 2.42-2.153 2.42Zm5.862 0c-1.185 0-2.153-1.086-2.153-2.42 0-1.333.94-2.43 2.153-2.43 1.224 0 2.173 1.097 2.153 2.43-.02 1.334-.929 2.42-2.153 2.42Z"/>
                </svg>
            ),
            label: "Discord"
        }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Shield className="h-8 w-8 text-blue-500" aria-hidden="true" />
                            <span className="ml-2 text-xl font-bold text-white tracking-tighter">
                RohanCyberOps
              </span>
                        </div>
                        <p className="mb-4 text-gray-400">
                            Providing expert cybersecurity services to protect your digital assets and infrastructure from evolving threats.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="flex items-center text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-1" aria-hidden="true" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.label}>
                                    <a
                                        href={service.href}
                                        className="flex items-center text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-1" aria-hidden="true" />
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Mail className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                                <a href="mailto:Rohannaagar666@outlook.com" className="hover:text-blue-400 transition-colors">
                                    Rohannaagar666@outlook.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Phone className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                                <a href="tel:+919466386495" className="hover:text-blue-400 transition-colors">
                                    +91 9466386495
                                </a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                                <span>Gurugram, HR, India</span>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-white mb-2">Subscribe to Newsletter</h4>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-4 py-2 w-full rounded-l-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    aria-label="Email for newsletter subscription"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Subscribe"
                                >
                                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">
                            &copy; {new Date().getFullYear()} Rohan Naagar. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0">
                            <ul className="flex space-x-6">
                                {legalLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;