import React, { useState, useEffect, useMemo } from 'react';
import { Award, Shield, Code, Activity, BookOpen, Lock, Zap, TrendingUp, Server } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Contribution {
    date: string;
    count: number;
}

interface PlatformStat {
    label: string;
    value: string;
    icon: React.ReactNode;
}

interface PlatformData {
    name: string;
    badgeUrl: string;
    profileUrl: string;
    icon: React.ReactNode;
    stats: PlatformStat[];
}

interface Certification {
    name: string;
    issuer: string;
    year: string;
    credentialId?: string;
    icon: React.ReactNode;
}

interface RecentActivity {
    text: string;
    time: string;
}

const Graph: React.FC = () => {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'weekly' | 'monthly'>('weekly');
    const [error, setError] = useState<string | null>(null);

    const trainingPlatforms: PlatformData[] = useMemo(() => [
        {
            name: "TryHackMe",
            badgeUrl: "https://tryhackme-badges.s3.amazonaws.com/RohanCyberOps.png",
            profileUrl: "https://tryhackme.com/p/RohanCyberOps",
            icon: <Shield className="text-blue-500" size={20} aria-hidden="true" />,
            stats: [
                { label: "Rooms Completed", value: "50+", icon: <BookOpen size={16} aria-hidden="true" /> },
                { label: "Rank", value: "Top 5%", icon: <TrendingUp size={16} aria-hidden="true" /> },
                { label: "Streak", value: "60 days", icon: <Activity size={16} aria-hidden="true" /> }
            ]
        },
        {
            name: "Hack The Box",
            badgeUrl: "https://www.hackthebox.com/badge/image/2313221.png",
            profileUrl: "https://app.hackthebox.com/profile/2313221",
            icon: <Lock className="text-blue-500" size={20} aria-hidden="true" />,
            stats: [
                { label: "Machines Solved", value: "30+", icon: <Server size={16} aria-hidden="true" /> },
                { label: "Rank", value: "Hacker", icon: <Award size={16} aria-hidden="true" /> },
                { label: "Challenge Points", value: "500+", icon: <Zap size={16} aria-hidden="true" /> }
            ]
        },
        {
            name: "GitHub",
            badgeUrl: "https://github.com/rohancyberops.png",
            profileUrl: "https://github.com/rohancyberops",
            icon: <Code className="text-blue-500" size={20} aria-hidden="true" />,
            stats: [
                { label: "Repositories", value: "20+", icon: <Code size={16} aria-hidden="true" /> },
                { label: "Contributions", value: "500+", icon: <Activity size={16} aria-hidden="true" /> },
                { label: "Stars Earned", value: "100+", icon: <Award size={16} aria-hidden="true" /> }
            ]
        }
    ], []);

    const certifications: Certification[] = useMemo(() => [
        {
            name: "Certified Ethical Hacker (CEH)",
            issuer: "EC-Council",
            year: "2019",
            credentialId: "ECC12345678",
            icon: <Shield className="text-blue-500" size={20} aria-hidden="true" />
        },
        {
            name: "Offensive Security Certified Professional (OSCP)",
            issuer: "Offensive Security",
            year: "2021",
            credentialId: "OSCP-1234",
            icon: <Zap className="text-blue-500" size={20} aria-hidden="true" />
        },
        {
            name: "Certified Information Systems Security Professional (CISSP)",
            issuer: "ISC²",
            year: "2020",
            credentialId: "123456",
            icon: <Lock className="text-blue-500" size={20} aria-hidden="true" />
        },
        {
            name: "CompTIA Security+",
            issuer: "CompTIA",
            year: "2018",
            icon: <Shield className="text-blue-500" size={20} aria-hidden="true" />
        },
        {
            name: "AWS Certified Security - Specialty",
            issuer: "Amazon Web Services",
            year: "2023",
            icon: <Server className="text-blue-500" size={20} aria-hidden="true" />
        },
        {
            name: "GIAC Penetration Tester (GPEN)",
            issuer: "SANS Institute",
            year: "2022",
            icon: <Activity className="text-blue-500" size={20} aria-hidden="true" />
        }
    ], []);

    const recentActivities: RecentActivity[] = useMemo(() => [
        { text: "Completed 'Advanced Penetration Testing' room on TryHackMe", time: "1 day ago" },
        { text: "Solved 'Forest' machine on Hack The Box", time: "2 days ago" },
        { text: "Contributed to open-source security tool on GitHub", time: "3 days ago" },
        { text: "Attended Black Hat security conference", time: "1 week ago" },
        { text: "Published article on Zero-Day vulnerabilities", time: "2 weeks ago" },
        { text: "Participated in CTF competition (Top 10%)", time: "3 weeks ago" }
    ], []);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                // Simulate API call with mock data
                await new Promise(resolve => setTimeout(resolve, 800));
                if (isMounted) {
                    setContributions(generateMockContributions());
                }
            } catch (err) {
                if (isMounted) {
                    setError("Failed to load activity data");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    const generateMockContributions = (): Contribution[] => {
        const data: Contribution[] = [];
        const today = new Date();

        const formatDate = (date: Date): string => {
            return date.toISOString().split('T')[0];
        };

        for (let i = 0; i < 365; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateString = formatDate(date);

            const dayOfWeek = date.getDay();
            const baseCount = dayOfWeek === 0 || dayOfWeek === 6 ?
                Math.floor(Math.random() * 3) : // Lower activity on weekends
                Math.floor(Math.random() * 6) + 2; // Higher activity on weekdays

            const isCtfDay = i % 30 === 0;
            const finalCount = isCtfDay ? baseCount * 3 : baseCount;

            data.push({
                date: dateString,
                count: Math.min(finalCount, 12) // Cap at 12
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

    const weeklySummary = useMemo(() => {
        const summary = [];
        for (let i = 0; i < 52; i++) {
            const weekContributions = contributions.slice(i * 7, (i + 1) * 7);
            if (weekContributions.length === 0) continue;

            const weekTotal = weekContributions.reduce((sum, day) => sum + day.count, 0);
            const startDate = weekContributions[0]?.date || 'Unknown';
            const endDate = weekContributions[weekContributions.length - 1]?.date || startDate;

            summary.push({
                week: i + 1,
                contributions: weekTotal,
                dateRange: `${startDate} to ${endDate}`
            });
        }
        return summary;
    }, [contributions]);

    const monthlySummary = useMemo(() => {
        const monthlyData: {month: string, contributions: number}[] = [];
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const currentYear = new Date().getFullYear();
        for (let month = 0; month < 12; month++) {
            const monthStart = new Date(currentYear, month, 1);
            const monthEnd = new Date(currentYear, month + 1, 0);

            const monthContributions = contributions.filter(contribution => {
                if (!contribution.date || contribution.date === 'No data') return false;

                const contDate = new Date(contribution.date);
                if (isNaN(contDate.getTime())) return false;

                return contDate >= monthStart && contDate <= monthEnd;
            });

            const monthTotal = monthContributions.reduce((sum, day) => sum + day.count, 0);
            monthlyData.push({
                month: monthNames[month],
                contributions: monthTotal
            });
        }

        return monthlyData;
    }, [contributions]);

    if (loading) return (
        <div className="text-center py-12" aria-live="polite">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p>Loading security activity data...</p>
        </div>
    );

    if (error) return (
        <div className="text-center py-12 text-red-500" aria-live="assertive">
            <p>{error}</p>
            <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
            >
                Retry
            </button>
        </div>
    );

    return (
        <section
            id="activity"
            className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
            aria-labelledby="activity-heading"
        >
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-900/10 dark:to-purple-900/10"></div>
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10"
                    aria-hidden="true"
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <header className="text-center mb-12">
                    <h2
                        id="activity-heading"
                        className="text-3xl font-bold text-gray-900 dark:text-white"
                    >
                        Security <span className="text-blue-600 dark:text-blue-400">Activity</span>
                    </h2>
                    <div
                        className="mt-2 h-1 w-20 bg-blue-500 mx-auto"
                        aria-hidden="true"
                    ></div>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                        Tracking my contributions, training progress, and certifications
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Code Contributions */}
                    <article className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                        <header className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <Code className="text-blue-500 mr-2" size={24} aria-hidden="true" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Code Contributions</h3>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setActiveTab('weekly')}
                                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                                        activeTab === 'weekly'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                    }`}
                                    aria-pressed={activeTab === 'weekly'}
                                >
                                    Weekly
                                </button>
                                <button
                                    onClick={() => setActiveTab('monthly')}
                                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                                        activeTab === 'monthly'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                    }`}
                                    aria-pressed={activeTab === 'monthly'}
                                >
                                    Monthly
                                </button>
                            </div>
                        </header>

                        {activeTab === 'weekly' ? (
                            <>
                                <div className="overflow-x-auto mb-4">
                                    <div className="inline-flex flex-col space-y-1">
                                        {Array.from({ length: 12 }).map((_, weekIndex) => (
                                            <div key={`week-${weekIndex}`} className="flex space-x-1">
                                                {Array.from({ length: 7 }).map((_, dayIndex) => {
                                                    const contribution = contributions[weekIndex * 7 + dayIndex] || { count: 0, date: 'No data' };
                                                    return (
                                                        <div
                                                            key={`day-${weekIndex}-${dayIndex}`}
                                                            className={`w-3 h-3 rounded-sm ${getContributionColor(contribution.count)}`}
                                                            aria-label={`${contribution.count} contributions on ${contribution.date}`}
                                                            role="img"
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
                                        {[0, 2, 4, 6, 8].map((val, i) => (
                                            <div
                                                key={`legend-${i}`}
                                                className={`w-3 h-3 rounded-sm ${getContributionColor(val)}`}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <span>More</span>
                                </div>
                            </>
                        ) : (
                            <div className="h-64" aria-label="Monthly contributions chart">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={monthlySummary}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#fff',
                                                borderColor: '#e5e7eb',
                                                borderRadius: '0.5rem',
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                            }}
                                        />
                                        <Bar
                                            dataKey="contributions"
                                            fill="#3b82f6"
                                            radius={[4, 4, 0, 0]}
                                            name="Contributions"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}

                        <a
                            href="https://github.com/rohancyberops"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            aria-label="View GitHub profile"
                        >
                            View GitHub Profile
                        </a>
                    </article>

                    {/* Training Platforms */}
                    <article className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                        <header className="flex items-center mb-6">
                            <Shield className="text-blue-500 mr-2" size={24} aria-hidden="true" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Training Platforms</h3>
                        </header>

                        <div className="space-y-6">
                            {trainingPlatforms.map((platform) => (
                                <section key={platform.name} className="flex flex-col sm:flex-row gap-4 items-start">
                                    <a
                                        href={platform.profileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0"
                                        aria-label={`${platform.name} profile`}
                                    >
                                        <img
                                            src={platform.badgeUrl}
                                            alt={`${platform.name} Badge`}
                                            className="h-24 w-auto rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                            width="96"
                                            height="96"
                                            loading="lazy"
                                        />
                                    </a>

                                    <div className="flex-1 w-full">
                                        <div className="flex items-center mb-2">
                                            {platform.icon}
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white ml-2">
                                                {platform.name}
                                            </h4>
                                        </div>

                                        <div className="grid grid-cols-3 gap-2">
                                            {platform.stats.map((stat, index) => (
                                                <div
                                                    key={`${platform.name}-stat-${index}`}
                                                    className="bg-gray-50 dark:bg-gray-700 p-2 rounded-md text-center"
                                                >
                                                    <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                                                        {stat.icon}
                                                        <span className="ml-1 text-xs">{stat.label}</span>
                                                    </div>
                                                    <p className="font-medium text-gray-900 dark:text-white mt-1">{stat.value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <a
                                            href={platform.profileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                            aria-label={`View ${platform.name} profile`}
                                        >
                                            View profile →
                                        </a>
                                    </div>
                                </section>
                            ))}
                        </div>
                    </article>
                </div>

                {/* Certifications */}
                <article className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <header className="flex items-center mb-6">
                        <Award className="text-blue-500 mr-2" size={24} aria-hidden="true" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certifications.map((cert, index) => (
                            <section
                                key={`cert-${index}`}
                                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
                            >
                                <div className="flex items-start">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {cert.name}
                                        </h4>
                                        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            <p>{cert.issuer}</p>
                                            <div className="flex justify-between items-center mt-1">
                                                <span>{cert.year}</span>
                                                {cert.credentialId && (
                                                    <span className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-0.5 rounded">
                            ID: {cert.credentialId}
                          </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </article>

                {/* Recent Activity */}
                <article className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl shadow-md">
                    <header className="flex items-center mb-6">
                        <Activity className="text-blue-500 mr-2" size={24} aria-hidden="true" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Security Activity</h3>
                    </header>

                    <ul className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <li key={`activity-${index}`} className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true"></div>
                                </div>
                                <div className="ml-3">
                                    <p className="text-gray-700 dark:text-gray-300">{activity.text}</p>
                                    <time className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</time>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Graph;