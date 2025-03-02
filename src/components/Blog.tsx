import React from 'react';
import { FileText, Calendar, User, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Ransomware-as-a-Service and How to Protect Your Organization",
      excerpt: "Exploring the growing trend of Ransomware-as-a-Service (RaaS) and effective strategies to safeguard your organization's critical assets.",
      date: "May 15, 2025",
      author: "Rohan Naagar",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Threat Intelligence"
    },
    {
      id: 2,
      title: "Zero Trust Architecture: Beyond the Buzzword",
      excerpt: "A practical guide to implementing Zero Trust security principles in your organization's infrastructure for enhanced protection.",
      date: "April 22, 2025",
      author: "Rohan Naagar",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Security Architecture"
    },
    {
      id: 3,
      title: "Advanced Web Application Penetration Testing Techniques",
      excerpt: "Discover sophisticated methods for identifying and exploiting vulnerabilities in modern web applications to improve security posture.",
      date: "March 10, 2025",
      author: "Rohan Naagar",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Penetration Testing"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Security <span className="text-blue-600 dark:text-blue-400">Insights</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Thoughts on cybersecurity trends, ethical hacking techniques, and industry best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Read More
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500/20 transition-colors"
          >
            View All Articles
            <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;