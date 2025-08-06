import React from 'react';
import { Calendar, User, ChevronRight, Twitter, BookOpen, Clock, Check, X, Github, Linkedin } from 'lucide-react';
import { Tweet } from 'react-tweet';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    read: boolean;
    readTime: string;
    image?: string;
}

const Blog: React.FC = () => {
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "The Rise of Ransomware-as-a-Service and How to Protect Your Organization",
            excerpt: "Exploring the growing trend of Ransomware-as-a-Service and how to use effective strategies to safeguard your organization's critical assets.",
            date: "May 10, 2023",
            author: "Rohan Naagar",
            category: "Threat Intelligence",
            read: false,
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Zero Trust Architecture: Beyond the Buzzword",
            excerpt: "A practical guide to implementing Zero Trust security principles in your organization's infrastructure for enhanced protection.",
            date: "April 12, 2023",
            author: "Rohan Naagar",
            category: "Security Architecture",
            read: true,
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Advanced Web Application Penetration Testing Techniques",
            excerpt: "Discover operational methods for identifying and exploiting vulnerabilities in modern web applications.",
            date: "March 10, 2023",
            author: "Rohan Naagar",
            category: "Penetration Testing",
            read: false,
            readTime: "12 min read",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Cloud Security Posture Management Best Practices",
            excerpt: "Essential strategies for maintaining robust security in cloud environments across multiple providers.",
            date: "February 28, 2023",
            author: "Rohan Naagar",
            category: "Cloud Security",
            read: false,
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const categories = [
        { name: "All", count: blogPosts.length },
        { name: "Threat Intelligence", count: blogPosts.filter(post => post.category === "Threat Intelligence").length },
        { name: "Security Architecture", count: blogPosts.filter(post => post.category === "Security Architecture").length },
        { name: "Penetration Testing", count: blogPosts.filter(post => post.category === "Penetration Testing").length },
        { name: "Cloud Security", count: blogPosts.filter(post => post.category === "Cloud Security").length }
    ];

    const [activeCategory, setActiveCategory] = React.useState("All");
    const [searchQuery, setSearchQuery] = React.useState("");

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const tweetIds: string[] = [
        '1916163911713202660',
        '1916163717395267594',
        '1916163260682015017',
        '1916163179555787234'
    ];

    return (
        <section id="contact" className="relative py-20 bg-gray-100 dark:bg-gray-900 overflow-hidden">
            {/* Hero Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] opacity-10 dark:opacity-20"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero Header */}
                <div className="text-center mb-12 pt-12 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
                        RohanCyberOps Blog
                    </h1>
                    <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
                        Insights on cybersecurity trends, ethical hacking techniques, and industry best practices.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Blog Posts - Takes up 2/3 of the space */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Search and Filter */}
                        <div className="bg-transparent backdrop-blur-sm p-6 rounded-xl shadow-md border border-transparent">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full px-4 py-2 border border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(category => (
                                    <button
                                        key={category.name}
                                        onClick={() => setActiveCategory(category.name)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                                            activeCategory === category.name
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                        }`}
                                    >
                                        {category.name} ({category.count})
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Blog Posts List */}
                        <div className="space-y-8">
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map(post => (
                                    <article key={post.id} className="bg-transparent backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-transparent">
                                        {post.image && (
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                                <div className="flex items-center">
                                                    <Calendar className="h-4 w-4 mr-1" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <User className="h-4 w-4 mr-1" />
                                                    <span>{post.author}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    <span>{post.readTime}</span>
                                                </div>
                                                <div className="flex items-center ml-auto">
                                                    {post.read ? (
                                                        <span className="flex items-center text-green-500">
                                                            <Check className="h-4 w-4 mr-1" /> Read
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center text-yellow-500">
                                                            <X className="h-4 w-4 mr-1" /> Unread
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-400 rounded-full">
                                                    {post.category}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                                            <a
                                                href="#"
                                                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors group"
                                            >
                                                Read More
                                                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="bg-transparent backdrop-blur-sm p-8 rounded-xl shadow-md text-center border border-transparent">
                                    <BookOpen className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No articles found</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {searchQuery
                                            ? `No articles match your search for "${searchQuery}"`
                                            : `No articles found in the ${activeCategory} category`}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar - Takes up 1/3 of the space */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* About Card */}
                        <div className="bg-transparent backdrop-blur-sm p-6 rounded-xl shadow-md border border-transparent">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About the Author</h2>
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/138981621?v=4"
                                        alt="Rohan Naagar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Rohan Naagar</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Cybersecurity Researcher</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Security enthusiast with expertise in penetration testing, threat intelligence, and security architecture.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                    <Github className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Twitter Feed */}
                        <div className="bg-transparent backdrop-blur-sm p-6 rounded-xl shadow-md sticky top-6 border border-transparent">
                            <div className="flex items-center mb-6">
                                <Twitter className="h-6 w-6 text-blue-500 mr-2" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Tweets</h2>
                            </div>

                            <div className="space-y-4">
                                {tweetIds.map(id => (
                                    <div key={id} className="tweet-container">
                                        <Tweet id={id} />
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://twitter.com/rohannaagar666"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                            >
                                Follow @rohannaagar666
                                <Twitter className="ml-2 h-4 w-4" />
                            </a>
                        </div>

                        {/* Popular Tags */}
                        <div className="bg-transparent backdrop-blur-sm p-6 rounded-xl shadow-md border border-transparent">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Popular Tags</h2>
                            <div className="flex flex-wrap gap-2">
                                {categories.filter(c => c.name !== "All").map(category => (
                                    <button
                                        key={category.name}
                                        onClick={() => setActiveCategory(category.name)}
                                        className={`px-3 py-1 text-sm rounded-md ${
                                            activeCategory === category.name
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                        }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;