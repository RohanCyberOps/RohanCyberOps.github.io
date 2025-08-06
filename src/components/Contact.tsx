import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, Lock, Phone, MapPin } from 'lucide-react';

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/xgvznqyr", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _subject: `New Contact Form Submission: ${formData.subject}`
                })
            });

            if (response.ok) {
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
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setFormStatus({
                submitted: true,
                success: false,
                message: 'There was an error sending your message. Please try again later or contact me directly at rohan150907@gmail.com'
            });
        }

        // Clear status after 5 seconds
        setTimeout(() => {
            setFormStatus(null);
        }, 5000);
    };

    return (
        <section id="contact" className="relative py-20 bg-gray-100 dark:bg-gray-900 overflow-hidden">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Let's <span className="text-blue-600 dark:text-blue-400">Connect</span>
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Have a question or want to work together? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Mail className="mr-2 text-blue-500" size={24} />
                            Send Me a Message
                        </h3>

                        <div className="flex items-center mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-800 dark:text-blue-300 text-sm">
                            <Lock className="h-5 w-5 mr-2 flex-shrink-0" />
                            <p>Your information is secure and will never be shared with third parties.</p>
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
                                        placeholder="Your name"
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
                                        placeholder="your@email.com"
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
                                    <option value="">What's this about?</option>
                                    <option value="Job Opportunity">Job Opportunity</option>
                                    <option value="Project Collaboration">Project Collaboration</option>
                                    <option value="Question">Question</option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="What would you like to discuss?"
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

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Personal Info Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                                        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                                        <a
                                            href="mailto:Rohannaagar666@outlook.com"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            Rohannaagar666@outlook.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                                        <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                                        <a
                                            href="tel:+91966386495"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            +91 9466XXXXXXX
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                                        <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Gurugram , HR, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Find Me Online
                            </h3>

                            <div className="space-y-4">
                                <a
                                    href="https://www.linkedin.com/in/rohan-naagar-779310322"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                >
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                                        <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Connect professionally</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.github.com/RohanCyberOps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                >
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                                        <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Check out my projects</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.x.com/Rohannaagar666"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                >
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                                        <Twitter className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Twitter</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Follow my updates</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;