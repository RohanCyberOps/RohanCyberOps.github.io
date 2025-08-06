import React, { useState } from 'react';
import { Briefcase, ChevronRight, Shield, Lock, Server, Globe, Github, ExternalLink, Code, Cpu, Database } from 'lucide-react';

const Projects: React.FC = () => {
    const [activeProject, setActiveProject] = useState<number | null>(null);
    const [filter, setFilter] = useState<string>('All');

    const projects = [
        {
            id: 1,
            title: "SecureNet Vulnerability Scanner",
            description: "An advanced network vulnerability scanner that identifies security weaknesses in systems and applications.",
            longDescription: "SecureNet is a comprehensive vulnerability assessment tool that scans networks, web applications, and cloud infrastructure for security weaknesses. It integrates with multiple threat intelligence feeds and uses heuristic analysis to identify both known vulnerabilities and potential zero-day threats.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Python", "Network Security", "Vulnerability Assessment"],
            technologies: ["Python 3.9", "Nmap", "OWASP ZAP", "PostgreSQL"],
            category: "Security Tools",
            github: "https://github.com/RohanCyberOps/SecureNet",
            demo: "#",
            caseStudy: "#",
            icon: <Shield className="h-6 w-6" />
        },
        // ... other projects
    ];

    const categories = [
        { name: "All", count: projects.length },
        { name: "Security Tools", count: projects.filter(p => p.category === "Security Tools").length },
        // ... other categories
    ];

    const toggleProject = (id: number) => {
        setActiveProject(activeProject === id ? null : id);
    };

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="relative py-20 overflow-hidden">
            {/* Hero Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')"
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with glass effect */}
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30 mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        My <span className="text-blue-600 dark:text-blue-400">Projects</span>
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Explore my cybersecurity projects and tools that help organizations strengthen their security posture.
                    </p>
                </div>

                {/* Category Filters with glass effect */}
                <div className="mb-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setFilter(category.name)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors backdrop-blur-sm ${
                                    filter === category.name
                                        ? 'bg-blue-600/90 text-white'
                                        : 'bg-gray-200/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 hover:bg-gray-300/70 dark:hover:bg-gray-600/70'
                                }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/30 dark:border-gray-700/40 transition-all duration-300 hover:shadow-xl ${
                                activeProject === project.id ? 'ring-2 ring-blue-500/50' : ''
                            }`}
                        >
                            <div className="relative h-48 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <div className="flex items-center">
                                        <div className="p-2 bg-blue-600/90 backdrop-blur-sm rounded-lg text-white mr-3">
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
                                            className="px-2 py-1 bg-blue-100/70 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm"
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
                                        {activeProject === project.id ? 'Show Less' : 'View Details'}
                                        <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${
                                            activeProject === project.id ? 'rotate-90' : ''
                                        }`} />
                                    </button>

                                    <div className="flex space-x-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-gray-100/70 dark:bg-gray-700/70 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-600/70 transition-colors backdrop-blur-sm"
                                            title="View on GitHub"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="p-2 bg-gray-100/70 dark:bg-gray-700/70 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-600/70 transition-colors backdrop-blur-sm"
                                            title="Live Demo"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>

                                {activeProject === project.id && (
                                    <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50 animate-fadeIn">
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">Project Highlights</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {project.longDescription}
                                        </p>

                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Technologies</h4>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-100/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium backdrop-blur-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <a
                                                href={project.caseStudy}
                                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center text-sm"
                                            >
                                                <Code className="h-4 w-4 mr-1" />
                                                View Case Study
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center text-sm"
                                            >
                                                <Github className="h-4 w-4 mr-1" />
                                                Source Code
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub CTA with glass effect */}
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/RohanCyberOps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-blue-500/50 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 hover:text-blue-700 dark:hover:bg-blue-500/30 transition-colors backdrop-blur-sm"
                    >
                        View All Projects on GitHub
                        <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;