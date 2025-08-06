import React from 'react';
import { Shield, Lock, Cpu, Code, Key, Network } from 'lucide-react';

const About: React.FC = () => {
    const expertiseItems = [
        {
            icon: <Shield className="h-8 w-8 text-blue-500" />,
            title: "Security Audits",
            description: "Comprehensive security assessments and compliance reviews"
        },
        {
            icon: <Lock className="h-8 w-8 text-blue-500" />,
            title: "Penetration Testing",
            description: "Ethical hacking to identify system vulnerabilities"
        },
        {
            icon: <Cpu className="h-8 w-8 text-blue-500" />,
            title: "Security Architecture",
            description: "Designing secure systems from the ground up"
        },
        {
            icon: <Code className="h-8 w-8 text-blue-500" />,
            title: "Secure Development",
            description: "Implementing security in the SDLC"
        },
        {
            icon: <Key className="h-8 w-8 text-blue-500" />,
            title: "Cryptography",
            description: "Encryption and key management solutions"
        },
        {
            icon: <Network className="h-8 w-8 text-blue-500" />,
            title: "Network Security",
            description: "Protecting infrastructure from threats"
        }
    ];

    return (
        <section id="about" className="relative py-20 overflow-hidden">
            {/* Hero Background with glassmorphism base */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] opacity-10 dark:opacity-20"></div>
            </div>

            {/* Main content container with glass effect */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with glass panel */}
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30 mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        About <span className="text-blue-600 dark:text-blue-400">Me</span>
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Cybersecurity professional dedicated to building secure digital ecosystems
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        {/* Bio section with glass effect */}
                        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30 mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Rohan Naagar
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                                I'm a passionate cybersecurity professional with extensive experience in protecting digital assets and infrastructure from evolving threats. My expertise spans penetration testing, vulnerability assessment, security architecture, and incident response.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                                Having worked with Fortune 500 companies and government agencies, I've developed a deep understanding of how to secure complex systems against sophisticated attacks while maintaining operational efficiency.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                My approach combines technical expertise with strategic thinking, allowing me to not only identify vulnerabilities but also implement comprehensive security solutions that align with business objectives.
                            </p>
                        </div>

                        {/* Expertise Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {expertiseItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-md border border-white/20 dark:border-gray-700/30 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className="text-blue-500 mb-2">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* QR Code Section with glass effect */}
                        <div className="mt-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-shrink-0">
                                    <img
                                        src="https://github.com/RohanCyberOps/RohanCyberOps.github.io/blob/main/assets/img.png"
                                        alt="Profile QR Code"
                                        className="w-32 h-32 rounded border border-gray-300 dark:border-gray-600"
                                        loading="lazy"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Connect Digitally
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                                        Scan this QR code to view my complete profile or save my contact information directly to your device.
                                    </p>
                                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors">
                                        Download vCard
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-blue-500/30 dark:border-blue-400/30 transform hover:scale-[1.02] transition-transform duration-300 aspect-w-3 aspect-h-4">
                            <img
                                src="https://github.com/RohanCyberOps/RohanCyberOps.github.io/blob/main/assets/WhatsApp%20Image%202025-07-20%20at%2020.45.55_b5a2a338.jpg?raw=true"
                                alt="Rohan Naagar - Cybersecurity Professional"
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        </div>

                        {/* Floating Badge with glass effect */}
                        <div className="absolute -bottom-6 -right-6 bg-blue-600/80 dark:bg-blue-500/80 backdrop-blur-sm text-white p-4 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 group">
                            <div className="flex items-center">
                                <div className="mr-3 bg-blue-700/80 dark:bg-blue-600/80 p-2 rounded-full">
                                    <Shield className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-mono text-sm">
                                        <span className="text-blue-200 group-hover:text-white transition-colors">&gt;</span> Ethical Hacker<br />
                                        <span className="text-blue-200 group-hover:text-white transition-colors">&gt;</span> Security Researcher<br />
                                        <span className="text-blue-200 group-hover:text-white transition-colors">&gt;</span> Digital Guardian
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Experience Badge with glass effect */}
                        <div className="absolute -top-4 -left-4 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl shadow-md">
                            <div className="flex items-center">
                                <span className="text-yellow-400 mr-2">★</span>
                                <span className="font-bold">5+ Years</span>
                                <span className="ml-2 text-sm">Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;