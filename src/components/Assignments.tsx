import React, { useState } from 'react';
import { Code, Database, Server, Cpu, BookOpen, ChevronRight, FileText, Download, X, Info } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface Assignment {
    id: number;
    title: string;
    description: string;
    category: string;
    completed: boolean;
    difficulty: 'Easy' | 'Medium' | 'Advanced';
    dateAssigned: string;
    dueDate: string;
    codeExample?: string;
    output?: string;
    pdfUrl?: string;
}

const Assignments: React.FC = () => {
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfLoading, setPdfLoading] = useState(false);
    const [pdfError, setPdfError] = useState<string | null>(null);
    const [showOverview, setShowOverview] = useState(true);

    const assignments: Assignment[] = [
        {
            id: 1,
            title: "Create a Student Database",
            description: "Implement a MySQL database for student records with proper schema design.",
            category: "SQL Queries",
            completed: true,
            difficulty: 'Easy',
            dateAssigned: "2025-07-01",
            dueDate: "2025-07-08",
            codeExample: "CREATE DATABASE student;\nUSE student;\nCREATE TABLE students (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  class INT,\n  percentage FLOAT\n);",
            output: "Query OK, 1 row affected (0.02 sec)",
            pdfUrl: "assets/IT802.pdf"
        },
        // ... other assignments
    ];

    const categories = [
        { name: "SQL Queries", icon: <Database className="h-5 w-5" />, count: 15 },
        { name: "Java Programs", icon: <Code className="h-5 w-5" />, count: 15 },
        { name: "Web Applications", icon: <Server className="h-5 w-5" />, count: 3 }
    ];

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        setPdfLoading(false);
        setPdfError(null);
    };

    const onDocumentLoadError = (error: Error) => {
        console.error('PDF load error:', error);
        setPdfError('Failed to load PDF. Please try again later.');
        setPdfLoading(false);
    };

    const openPdfViewer = (pdfUrl: string) => {
        setSelectedPdf(pdfUrl);
        setPdfLoading(true);
        setPdfError(null);
        setPageNumber(1);
    };

    const closePdfViewer = () => {
        setSelectedPdf(null);
        setPdfError(null);
    };

    const changePage = (offset: number) => {
        setPageNumber(prev => Math.min(Math.max(prev + offset, 1), numPages || 1));
    };

    return (
        <section className="py-12 bg-white dark:bg-gray-900 relative">
            {/* PDF Viewer Modal */}
            {selectedPdf && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-6xl w-full max-h-screen h-full flex flex-col">
                        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                PDF Viewer
                            </h3>
                            <button
                                onClick={closePdfViewer}
                                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                                aria-label="Close PDF viewer"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
                            {pdfLoading ? (
                                <div className="flex items-center justify-center h-full">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                                </div>
                            ) : pdfError ? (
                                <div className="text-center p-8">
                                    <div className="text-red-500 mb-4">{pdfError}</div>
                                    <button
                                        onClick={() => openPdfViewer(selectedPdf)}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Retry
                                    </button>
                                </div>
                            ) : (
                                <Document
                                    file={selectedPdf}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    onLoadError={onDocumentLoadError}
                                    loading={
                                        <div className="flex items-center justify-center h-full">
                                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                                        </div>
                                    }
                                    error={
                                        <div className="text-red-500 p-4">
                                            Failed to load PDF document.
                                        </div>
                                    }
                                >
                                    <Page
                                        pageNumber={pageNumber}
                                        width={Math.min(800, window.innerWidth - 40)}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                        loading={
                                            <div className="flex items-center justify-center h-full">
                                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                                            </div>
                                        }
                                    />
                                </Document>
                            )}
                        </div>

                        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => changePage(-1)}
                                    disabled={pageNumber <= 1}
                                    className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
                                    aria-label="Previous page"
                                >
                                    Previous
                                </button>
                                <span className="text-gray-700 dark:text-gray-300">
                  Page {pageNumber} of {numPages || '--'}
                </span>
                                <button
                                    onClick={() => changePage(1)}
                                    disabled={pageNumber >= (numPages || 1)}
                                    className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
                                    aria-label="Next page"
                                >
                                    Next
                                </button>
                            </div>

                            <a
                                href={selectedPdf}
                                download
                                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                aria-label="Download PDF"
                            >
                                <Download className="h-5 w-5 mr-1" />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="text-gray-900 dark:text-white">IT802</span>{" "}
                        <span className="text-gray-900 dark:text-blue-400">Assignments</span>
                    </h1>
                    <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Comprehensive study of SQL queries, Java programs, and web-based applications for Class XII
                    </p>
                </div>

                {/* Overview Section */}
                {showOverview && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8 relative">
                        <button
                            onClick={() => setShowOverview(false)}
                            className="absolute top-4 right-4 text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100"
                            aria-label="Close overview"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <div className="flex items-start">
                            <Info className="h-6 w-6 text-blue-500 dark:text-blue-300 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <h2 className="text-xl font-bold text-blue-800 dark:text-blue-100 mb-3">
                                    Project Overview
                                </h2>
                                <p className="text-blue-700 dark:text-blue-200 mb-2">
                                    This project covers practical implementations of:
                                </p>
                                <ul className="list-disc pl-5 text-blue-700 dark:text-blue-200 space-y-1">
                                    <li>15 SQL queries with MySQL commands</li>
                                    <li>15 Java console-based programs</li>
                                    <li>3 Web-based application case studies</li>
                                </ul>
                                <p className="text-blue-700 dark:text-blue-200 mt-3">
                                    Submitted by: <span className="font-medium">Rohan Naagar</span> (Class XII - Non-Medical)
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Categories Summary */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Assignment Categories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {categories.map((category) => (
                                    <div key={category.name} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                        <div className="flex items-center mb-2">
                                            {category.icon}
                                            <span className="ml-2 font-medium text-gray-900 dark:text-white">{category.name}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {category.count} assignments
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Assignments List */}
                        <div className="space-y-6">
                            {assignments.map((assignment) => (
                                <article key={assignment.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                                    <BookOpen className="h-4 w-4 mr-1" />
                                                    <span>{assignment.category}</span>
                                                    <span className="mx-2">•</span>
                                                    <span>{assignment.difficulty}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                                    {assignment.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                    {assignment.description}
                                                </p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                assignment.completed
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                            }`}>
                        {assignment.completed ? 'Completed' : 'Pending'}
                      </span>
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-500 dark:text-gray-400">Assigned</p>
                                                <p className="text-gray-900 dark:text-white">{assignment.dateAssigned}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 dark:text-gray-400">Due Date</p>
                                                <p className="text-gray-900 dark:text-white">{assignment.dueDate}</p>
                                            </div>
                                        </div>

                                        {assignment.codeExample && (
                                            <div className="mt-6">
                                                <div className="flex items-center mb-2">
                                                    <Code className="h-5 w-5 mr-2 text-blue-500" />
                                                    <h4 className="font-medium text-gray-900 dark:text-white">Code Example</h4>
                                                </div>
                                                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm">
                          {assignment.codeExample}
                        </pre>
                                            </div>
                                        )}

                                        {assignment.output && (
                                            <div className="mt-4">
                                                <div className="flex items-center mb-2">
                                                    <Cpu className="h-5 w-5 mr-2 text-green-500" />
                                                    <h4 className="font-medium text-gray-900 dark:text-white">Expected Output</h4>
                                                </div>
                                                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm">
                          {assignment.output}
                        </pre>
                                            </div>
                                        )}

                                        {assignment.pdfUrl && (
                                            <div className="mt-4">
                                                <button
                                                    onClick={() => openPdfViewer(assignment.pdfUrl!)}
                                                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                                >
                                                    <FileText className="h-5 w-5 mr-2" />
                                                    View Assignment PDF
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Progress Stats */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md sticky top-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Assignment Progress</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Completion Status</h3>
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-full h-4 mb-2">
                                        <div
                                            className="bg-blue-500 h-4 rounded-full"
                                            style={{
                                                width: `${(assignments.filter(a => a.completed).length / assignments.length) * 100}%`
                                            }}
                                        ></div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {assignments.filter(a => a.completed).length} of {assignments.length} assignments completed
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">By Difficulty</h3>
                                    <div className="space-y-3">
                                        {['Easy', 'Medium', 'Advanced'].map((level) => (
                                            <div key={level} className="flex items-center justify-between">
                                                <span className="text-gray-600 dark:text-gray-300">{level}</span>
                                                <span className="font-medium text-gray-900 dark:text-white">
                          {assignments.filter(a => a.difficulty === level).length}
                        </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Upcoming Deadlines</h3>
                                    <div className="space-y-4">
                                        {assignments
                                            .filter(a => !a.completed)
                                            .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                                            .map((assignment) => (
                                                <div key={assignment.id} className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {assignment.title}
                                                        </p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                                            Due {assignment.dueDate}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Links</h2>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                    <ChevronRight className="h-5 w-5 mr-2" />
                                    Project Guidelines
                                </a>
                                <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                    <ChevronRight className="h-5 w-5 mr-2" />
                                    Submission Portal
                                </a>
                                <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                    <ChevronRight className="h-5 w-5 mr-2" />
                                    Reference Materials
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Assignments;