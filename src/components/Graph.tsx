import React, { useState, useEffect } from 'react';
import { Calendar, Award, Shield, Code } from 'lucide-react';

interface Contribution {
    date: string;
    count: number;
}

interface PlatformData {
    name: string;
    badgeUrl: string;
    profileUrl: string;
    stats: {
        label: string;
        value: string;
    }[];
}

const Graph: React.FC = () => {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Sample data - replace with actual API calls
    const trainingPlatforms: PlatformData[] = [
        {
            name: "TryHackMe",
            badgeUrl: "https://tryhackme-badges.s3.amazonaws.com/RohanCyberOps.png",
            profileUrl: "https://tryhackme.com/p/RohanCyberOps",
            stats: [
                { label: "Rooms Completed", value: "50+" },
                { label: "Rank", value: "Top 5%" },
                { label: "Skills", value: "Pentesting, CTFs" }
            ]
        },
        {
            name: "Hack The Box",
            badgeUrl: "https://www.hackthebox.com/badge/image/2313221.png",
            profileUrl: "https://app.hackthebox.com/profile/2313221",
            stats: [
                { label: "Machines Solved", value: "30+" },
                { label: "Rank", value: "Hacker" },
                { label: "Skills", value: "Privilege Escalation" }
            ]
        },
        {
            name: "GitHub",
            badgeUrl: "https://github.com/rohancyberops.png",
            profileUrl: "https://github.com/rohancyberops",
            stats: [
                { label: "Repositories", value: "20+" },
                { label: "Contributions", value: "500+" },
                { label: "Focus", value: "Security Tools" }
            ]
        }
    ];

    useEffect(() => {
        // Simulate API fetch
        const fetchData = async () => {
            try {
                // In a real app, you would fetch from your API endpoint
                // const response = await fetch('/api/github');
                // const data = await response.json();

                // Mock data for demonstration
                const mockData = generateMockContributions();
                setContributions(mockData);
            } catch (err) {
                setError("Failed to load data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const generateMockContributions = (): Contribution[] => {
        const data: Contribution[] = [];
        const today = new Date();

        for (let i = 0; i < 365; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateString = date.toISOString().split('T')[0];

            data.push({
                date: dateString,
                count: Math.floor(Math.random() * 10) // Random count for demo
            });
        }

        return data.reverse();
    };

    const getContributionColor = (count: number) => {
        if (count === 0) return 'bg-gray-100 dark:bg-gray-700';
        if (count < 3) return 'bg-green-200 dark:bg-green-900';
        if (count < 6) return 'bg-green-300 dark:bg-green-800';
        if (count < 9) return 'bg-green-400 dark:bg-green-700';
        return 'bg-green-500 dark:bg-green-600';
    };

    if (loading) return <div className="text-center py-12">Loading security metrics...</div>;
    if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

    return (
        <section className="py-12 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Security <span className="text-blue-600 dark:text-blue-400">Activity</span>
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                        My contributions, training progress, and certifications
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* GitHub Contributions */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-6">
                            <Code className="text-blue-500 mr-2" size={24} />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Code Contributions</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <div className="inline-flex flex-col space-y-1">
                                {Array.from({ length: 7 }).map((_, weekIndex) => (
                                    <div key={weekIndex} className="flex space-x-1">
                                        {Array.from({ length: 20 }).map((_, dayIndex) => {
                                            const contribution = contributions[weekIndex * 20 + dayIndex] || { count: 0 };
                                            return (
                                                <div
                                                    key={dayIndex}
                                                    className={`w-3 h-3 rounded-sm ${getContributionColor(contribution.count)}`}
                                                    title={`${contribution.count} contributions on ${contribution.date}`}
                                                />
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>Less</span>
                            <div className="flex space-x-1">
                                <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-700" />
                                <div className="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900" />
                                <div className="w-3 h-3 rounded-sm bg-green-400 dark:bg-green-700" />
                                <div className="w-3 h-3 rounded-sm bg-green-500 dark:bg-green-600" />
                            </div>
                            <span>More</span>
                        </div>

                        <a
                            href="https://github.com/rohancyberops"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            View GitHub Profile
                        </a>
                    </div>

                    {/* Training Platforms */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-6">
                            <Shield className="text-blue-500 mr-2" size={24} />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Training Platforms</h3>
                        </div>

                        <div className="space-y-6">
                            {trainingPlatforms.map((platform) => (
                                <div key={platform.name} className="flex flex-col sm:flex-row gap-4 items-center">
                                    {platform.badgeUrl && (
                                        <a href={platform.profileUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                                            <img
                                                src={platform.badgeUrl}
                                                alt={`${platform.name} Badge`}
                                                className="h-24 w-auto rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                                width={10}
                                                height={10}
                                            />
                                        </a>
                                    )}

                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{platform.name}</h4>
                                        <div className="grid grid-cols-3 gap-2 mt-2">
                                            {platform.stats.map((stat, index) => (
                                                <div key={index} className="text-center">
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                                                    <p className="font-medium text-gray-900 dark:text-white">{stat.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <a
                                            href={platform.profileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            View profile →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-6">
                        <Award className="text-blue-500 mr-2" size={24} />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            "Certified Ethical Hacker (CEH)",
                            "Offensive Security Certified Professional (OSCP)",
                            "Certified Information Systems Security Professional (CISSP)",
                            "CompTIA Security+",
                            "Certified Cloud Security Professional (CCSP)",
                            "GIAC Penetration Tester (GPEN)"
                        ].map((cert, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-900 dark:text-white">{cert}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Graph;