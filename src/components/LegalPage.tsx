import React, { useState } from 'react';
import { Shield, ArrowUp, Lock, BookOpen, Server, Key, Cpu, Zap } from 'lucide-react';

const LegalPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState('privacy');

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const legalSections = [
        {
            id: 'privacy',
            icon: <Lock className="h-6 w-6 text-blue-500" />,
            title: "Privacy Policy",
            description: "How we collect, use, and protect your personal information"
        },
        {
            id: 'terms',
            icon: <BookOpen className="h-6 w-6 text-blue-500" />,
            title: "Terms of Service",
            description: "The legal agreement between you and our services"
        },
        {
            id: 'cookies',
            icon: <Server className="h-6 w-6 text-blue-500" />,
            title: "Cookie Policy",
            description: "How we use cookies and similar tracking technologies"
        },
        {
            id: 'security',
            icon: <Shield className="h-6 w-6 text-blue-500" />,
            title: "Security Practices",
            description: "Our approach to protecting your data"
        },
        {
            id: 'compliance',
            icon: <Cpu className="h-6 w-6 text-blue-500" />,
            title: "Compliance",
            description: "Regulatory standards we adhere to"
        },
        {
            id: 'data',
            icon: <Key className="h-6 w-6 text-blue-500" />,
            title: "Data Protection",
            description: "How we safeguard your information"
        }
    ];

    const securityPrinciples = [
        {
            title: "Zero Trust Architecture",
            description: "We implement strict access controls and continuous verification for all systems and data.",
            icon: <Shield className="h-5 w-5 text-blue-500" />
        },
        {
            title: "End-to-End Encryption",
            description: "All sensitive data is encrypted both in transit and at rest using industry-standard protocols.",
            icon: <Lock className="h-5 w-5 text-blue-500" />
        },
        {
            title: "Regular Audits",
            description: "Our systems undergo frequent security assessments by internal and external experts.",
            icon: <Zap className="h-5 w-5 text-blue-500" />
        },
        {
            title: "Incident Response",
            description: "We maintain a 24/7 security operations center to detect and respond to threats.",
            icon: <Server className="h-5 w-5 text-blue-500" />
        }
    ];

    const complianceStandards = [
        { name: "GDPR", region: "EU", status: "Fully Compliant" },
        { name: "CCPA", region: "California", status: "Fully Compliant" },
        { name: "HIPAA", region: "Healthcare", status: "Partial Compliance" },
        { name: "ISO 27001", region: "International", status: "Certified" },
        { name: "SOC 2", region: "North America", status: "In Progress" },
        { name: "PCI DSS", region: "Payment Cards", status: "Compliant" }
    ];

    return (
        <section className="relative py-20 bg-gray-100 dark:bg-gray-900 overflow-hidden">
            {/* Hero Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')"
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        RohanCyberOps <span className="text-blue-600 dark:text-blue-400">Legal</span>
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Transparency and trust are at the core of our cybersecurity services
                    </p>
                </div>

                {/* Navigation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {legalSections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`p-6 rounded-xl shadow-md border transition-all duration-300 transform hover:-translate-y-1 ${
                                activeSection === section.id
                                    ? 'bg-blue-600 text-white border-blue-500'
                                    : 'bg-white dark:bg-gray-800 hover:shadow-lg hover:border-blue-400 border-gray-200 dark:border-gray-700'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`mr-4 p-3 rounded-full ${
                                    activeSection === section.id
                                        ? 'bg-blue-700 text-white'
                                        : 'bg-blue-100 dark:bg-gray-700 text-blue-500'
                                }`}>
                                    {section.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold">{section.title}</h3>
                                    <p className={`mt-1 ${
                                        activeSection === section.id
                                            ? 'text-blue-100'
                                            : 'text-gray-600 dark:text-gray-400'
                                    }`}>
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content Sections */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    {/* Privacy Policy */}
                    <section className={`p-8 ${activeSection !== 'privacy' ? 'hidden' : ''}`}>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Lock className="h-8 w-8 mr-3 text-blue-500" />
                            Privacy Policy
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Information We Collect",
                                    content: "We collect information you provide directly, including name, email, and contact details when you use our services. We also automatically collect usage data through cookies and similar technologies to enhance your experience and improve our security measures."
                                },
                                {
                                    title: "How We Use Your Information",
                                    content: "Your information is used to provide and improve our cybersecurity services, communicate important security updates, and ensure the protection of your digital assets. We may use aggregated, anonymized data for security research and to develop new protective measures."
                                },
                                {
                                    title: "Data Sharing & Protection",
                                    content: "We implement enterprise-grade security measures to protect your data. Information is only shared with verified security partners when necessary for service delivery, and we never sell personal data. All third-party providers undergo rigorous security assessments."
                                },
                                {
                                    title: "Your Security Rights",
                                    content: "As a security-conscious organization, we extend GDPR and CCPA rights to all users globally. You may access, correct, or request deletion of your data. For security verification purposes, certain requests may require additional authentication steps."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg border-l-4 border-blue-500">
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                        {index + 1}. {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Terms of Service */}
                    <section className={`p-8 ${activeSection !== 'terms' ? 'hidden' : ''}`}>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <BookOpen className="h-8 w-8 mr-3 text-blue-500" />
                            Terms of Service
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Security Service Agreement",
                                    content: "By engaging our cybersecurity services, you agree to comply with all security protocols we implement. Unauthorized testing or reverse engineering of our services is strictly prohibited and may result in immediate termination and legal action."
                                },
                                {
                                    title: "Ethical Use Policy",
                                    content: "Our penetration testing and security assessment tools are provided solely for authorized security testing. Any use of these tools against systems without explicit permission violates computer crime laws and will be reported to authorities."
                                },
                                {
                                    title: "Vulnerability Disclosure",
                                    content: "Discovered vulnerabilities must be reported through our responsible disclosure program. Public disclosure of vulnerabilities without prior coordination is prohibited and may result in legal consequences."
                                },
                                {
                                    title: "Service Level Commitments",
                                    content: "While we implement industry-leading security measures, we cannot guarantee absolute protection against all threats. Our liability is limited to the terms outlined in your specific service agreement."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg border-l-4 border-blue-500">
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                        {index + 1}. {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Cookie Policy */}
                    <section className={`p-8 ${activeSection !== 'cookies' ? 'hidden' : ''}`}>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Server className="h-8 w-8 mr-3 text-blue-500" />
                            Cookie Policy
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Security-Critical Cookies",
                                    content: "Essential cookies maintain your secure session and protect against CSRF attacks. These cannot be disabled without breaking core security functionality. Our secure cookies use HttpOnly, Secure, and SameSite flags for maximum protection."
                                },
                                {
                                    title: "Analytics & Performance",
                                    content: "We use minimal, anonymized analytics to identify potential security threats and improve service reliability. These cookies help us detect unusual activity patterns that may indicate brute force attacks or other threats."
                                },
                                {
                                    title: "Preference Cookies",
                                    content: "Preference cookies remember your security settings like dark mode preference and notification preferences. These enhance your experience but are not required for basic functionality."
                                },
                                {
                                    title: "Managing Cookies",
                                    content: "While you can manage cookies through browser settings, we recommend keeping security-critical cookies enabled. Our cookie consent manager allows granular control over non-essential tracking while maintaining security protections."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg border-l-4 border-blue-500">
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                        {index + 1}. {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Security Practices */}
                    <section className={`p-8 ${activeSection !== 'security' ? 'hidden' : ''}`}>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Shield className="h-8 w-8 mr-3 text-blue-500" />
                            Security Practices
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {securityPrinciples.map((principle, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center mb-3">
                                        {principle.icon}
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 ml-2">
                                            {principle.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {principle.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                Our Security Commitment
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We invest heavily in security infrastructure and training to ensure we stay ahead of emerging threats. Our team includes certified security professionals who continuously monitor and improve our defenses.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                                <li>24/7 security monitoring and incident response</li>
                                <li>Regular third-party security audits</li>
                                <li>Continuous security training for all employees</li>
                                <li>Bug bounty program for external researchers</li>
                            </ul>
                        </div>
                    </section>

                    {/* Compliance */}
                    <section className={`p-8 ${activeSection !== 'compliance' ? 'hidden' : ''}`}>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Cpu className="h-8 w-8 mr-3 text-blue-500" />
                            Compliance Standards
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Standard
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Region/Scope
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {complianceStandards.map((standard, index) => (
                                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                            {standard.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                            {standard.region}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    standard.status === 'Fully Compliant' || standard.status === 'Certified'
                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                        : standard.status === 'Partial Compliance'
                                                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                                }`}>
                                                    {standard.status}
                                                </span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                Compliance Roadmap
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We are continuously working to expand our compliance coverage to meet global standards and customer requirements.
                            </p>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                Current compliance coverage: 75% of target standards
                            </p>
                        </div>
                    </section>

                    {/* Data Protection */}
                    <section className={`p-8 ${activeSection !== 'data' ? 'hidden' : ''}`}>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Key className="h-8 w-8 mr-3 text-blue-500" />
                            Data Protection
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                    Encryption Standards
                                </h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• AES-256 for data at rest</li>
                                    <li>• TLS 1.3 for data in transit</li>
                                    <li>• FIPS 140-2 validated modules</li>
                                    <li>• Hardware Security Modules (HSMs)</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                    Access Controls
                                </h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Role-based access control (RBAC)</li>
                                    <li>• Multi-factor authentication (MFA)</li>
                                    <li>• Just-in-time privileged access</li>
                                    <li>• Continuous access reviews</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                    Data Lifecycle
                                </h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Automated data classification</li>
                                    <li>• Retention policy enforcement</li>
                                    <li>• Secure deletion processes</li>
                                    <li>• Backup encryption</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                Data Protection Officer
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Our Data Protection Officer oversees all aspects of data protection and can be contacted for any privacy-related concerns:
                            </p>
                            <div className="flex items-center">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                                    <Shield className="h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Security Team</p>
                                    <p className="text-gray-600 dark:text-gray-300">dpo@rohancyberops.com</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Contact Information */}
                <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Legal Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">For legal inquiries:</h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                                <span className="font-medium">Email:</span> rohannaagar666@outlook.com
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                                <span className="font-medium">Phone:</span> +91 9466386495
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                <span className="font-medium">Address:</span> Gurugram, Haryana, India
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">For security issues:</h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Please report any security vulnerabilities or concerns to our security team.
                            </p>
                            <a
                                href="mailto:rohannaagar666@outlook.com"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors"
                            >
                                <Shield className="h-4 w-4 mr-2" />
                                Report Security Issue
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-6 w-6" />
            </button>
        </section>
    );
};

export default LegalPage;