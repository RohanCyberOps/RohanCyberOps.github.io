import React from 'react';
import { Calendar, User, ChevronRight, Twitter } from 'lucide-react';
import { Tweet } from 'react-tweet';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  read: boolean;
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
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Replace these with actual working tweet IDs from @rohannaagar666
  const tweetIds: string[] = [
    '1916163911713202660', // Example format - replace with real IDs
    '1916163717395267594',
    '1916163260682015017',
    '1916163179555787234'
  ];

  return (
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-gray-900 dark:text-white transition-colors duration-300 ">RohanCyberOps
              </span>{" "}
              <span className="text-gray-900 dark:text-blue-400 transition-colors duration-300">Blogs
              </span></h1>
            <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Thoughts on cybersecurity trends, ethical hacking techniques, and industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts - Takes up 2/3 of the space */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Threat Intelligence</h2>
                <ul className="space-y-4">
                  {blogPosts
                      .filter(post => post.category === "Threat Intelligence")
                      .map(post => (
                          <li key={post.id} className="flex items-start">
                            <input
                                type="checkbox"
                                checked={post.read}
                                readOnly
                                className="mt-1 mr-3 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                            />
                            <div>
                              <span className="text-gray-500 dark:text-gray-400">{post.date} → {post.author}</span>
                            </div>
                          </li>
                      ))}
                </ul>
              </div>

              <div className="space-y-8">
                {blogPosts.map(post => (
                    <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
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
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                        <a
                            href="#"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                        >
                          Read More
                          <ChevronRight className="ml-1 h-5 w-5" />
                        </a>
                      </div>
                    </article>
                ))}
              </div>
            </div>

            {/* Twitter Feed - Takes up 1/3 of the space */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md sticky top-6">
                <div className="flex items-center mb-6">
                  <Twitter className="h-6 w-6 text-blue-500 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Updates</h2>
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
            </div>
          </div>
        </div>
      </section>
  );
};

export default Blog;