import React, { useState } from 'react';
import { Mail, MessageSquare, BookOpen, CheckCircle, XCircle, Loader, Info, Upload, FileText, FileInput, X } from 'lucide-react';

const Assignments: React.FC = () => {
    // Form states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        assignmentId: '',
        urgency: 'normal'
    });

    // Submission states
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // File upload states
    const [files, setFiles] = useState<File[]>([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [submissionType, setSubmissionType] = useState<'enquiry' | 'submission'>('enquiry');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            if (submissionType === 'submission' && files.length === 0) {
                throw new Error('Please attach at least one file for submission');
            }

            const formPayload = new FormData();

            // Add form data
            Object.entries(formData).forEach(([key, value]) => {
                formPayload.append(key, value);
            });

            // Add files if submitting
            if (submissionType === 'submission') {
                files.forEach(file => {
                    formPayload.append('files', file);
                });
            }

            // Add submission type
            formPayload.append('type', submissionType);

            const response = await fetch('https://formspree.io/f/xgvznqyr', {
                method: 'POST',
                body: formPayload,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    assignmentId: '',
                    urgency: 'normal'
                });
                setFiles([]);
            } else {
                throw new Error('Submission failed');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'There was an error submitting your request. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const sampleAssignments = [
        { id: 'IT802-001', title: 'Student Database Implementation', submissionDue: '2025-08-15' },
        { id: 'IT802-002', title: 'Library Management System', submissionDue: '2025-08-22' },
        { id: 'IT802-003', title: 'E-commerce Website', submissionDue: '2025-08-29' },
        { id: 'IT802-004', title: 'Inventory Management', submissionDue: '2025-09-05' }
    ];

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <section id="contact" className="relative py-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] opacity-10 dark:opacity-20"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="text-gray-900 dark:text-white">Assignment</span>{' '}
                        <span className="text-blue-600 dark:text-blue-400">Submission Portal</span>
                    </h1>
                    <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Submit your assignments or ask questions about requirements and deadlines
                    </p>
                </div>

                {/* Toggle between Enquiry and Submission */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-md shadow-sm">
                        <button
                            onClick={() => setSubmissionType('enquiry')}
                            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${submissionType === 'enquiry' ? 'bg-blue-600 text-white' : 'bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-600/90'}`}
                        >
                            Make an Enquiry
                        </button>
                        <button
                            onClick={() => setSubmissionType('submission')}
                            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${submissionType === 'submission' ? 'bg-blue-600 text-white' : 'bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-600/90'}`}
                        >
                            Submit Assignment
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Main Form */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20 dark:border-gray-700/50">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            {submissionType === 'enquiry' ? (
                                <MessageSquare className="h-6 w-6 mr-2 text-blue-500" />
                            ) : (
                                <Upload className="h-6 w-6 mr-2 text-blue-500" />
                            )}
                            {submissionType === 'enquiry' ? 'Send Your Enquiry' : 'Submit Your Assignment'}
                        </h2>

                        {submitted ? (
                            <div className="bg-green-50/80 dark:bg-green-900/30 rounded-lg p-6 text-center backdrop-blur-sm">
                                <CheckCircle className="h-12 w-12 text-green-500 dark:text-green-300 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-2">
                                    {submissionType === 'enquiry' ? 'Enquiry Submitted!' : 'Assignment Submitted!'}
                                </h3>
                                <p className="text-green-700 dark:text-green-200">
                                    {submissionType === 'enquiry'
                                        ? `Thank you for your enquiry. We'll respond to you at ${formData.email} within 24 hours.`
                                        : 'Your assignment has been successfully submitted. You will receive a confirmation email shortly.'}
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    {submissionType === 'enquiry' ? 'Send Another Enquiry' : 'Submit Another Assignment'}
                                </button>
                            </div>
                        ) : error ? (
                            <div className="bg-red-50/80 dark:bg-red-900/30 rounded-lg p-6 text-center backdrop-blur-sm">
                                <XCircle className="h-12 w-12 text-red-500 dark:text-red-300 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-red-800 dark:text-red-100 mb-2">
                                    Submission Error
                                </h3>
                                <p className="text-red-700 dark:text-red-200 mb-4">
                                    {error}
                                </p>
                                <button
                                    onClick={() => setError('')}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Try Again
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
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
                                        className="w-full px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white/90 dark:bg-gray-700/90 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white/90 dark:bg-gray-700/90 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="assignmentId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Assignment
                                    </label>
                                    <select
                                        id="assignmentId"
                                        name="assignmentId"
                                        value={formData.assignmentId}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white/90 dark:bg-gray-700/90 dark:text-white"
                                    >
                                        <option value="">Select an assignment...</option>
                                        {sampleAssignments.map(assignment => (
                                            <option key={assignment.id} value={assignment.id}>
                                                {assignment.id} - {assignment.title} (Due: {formatDate(assignment.submissionDue)})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {submissionType === 'enquiry' && (
                                    <>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white/90 dark:bg-gray-700/90 dark:text-white"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Urgency
                                            </label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {[
                                                    { value: 'low', label: 'Low' },
                                                    { value: 'normal', label: 'Normal' },
                                                    { value: 'high', label: 'High' }
                                                ].map(option => (
                                                    <label key={option.value} className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="urgency"
                                                            value={option.value}
                                                            checked={formData.urgency === option.value}
                                                            onChange={handleChange}
                                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                                        />
                                                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {submissionType === 'enquiry' ? 'Your Message' : 'Additional Notes (Optional)'}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required={submissionType === 'enquiry'}
                                        className="w-full px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white/90 dark:bg-gray-700/90 dark:text-white"
                                    ></textarea>
                                </div>

                                {submissionType === 'submission' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Upload Files
                                        </label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300/50 dark:border-gray-600/50 border-dashed rounded-md bg-white/50 dark:bg-gray-700/50">
                                            <div className="space-y-1 text-center">
                                                <div className="flex text-sm text-gray-600 dark:text-gray-300">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 focus-within:outline-none"
                                                    >
                                                        <span>Upload files</span>
                                                        <input
                                                            id="file-upload"
                                                            name="file-upload"
                                                            type="file"
                                                            multiple
                                                            onChange={handleFileChange}
                                                            className="sr-only"
                                                        />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    PDF, DOC, ZIP up to 10MB
                                                </p>
                                            </div>
                                        </div>

                                        {/* File preview */}
                                        {files.length > 0 && (
                                            <div className="mt-4 space-y-2">
                                                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Selected Files:
                                                </h4>
                                                <ul className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
                                                    {files.map((file, index) => (
                                                        <li key={index} className="py-2 flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                <FileText className="h-5 w-5 text-gray-400 mr-2" />
                                                                <span className="text-sm text-gray-700 dark:text-gray-300 truncate max-w-xs">
                                                                    {file.name}
                                                                </span>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeFile(index)}
                                                                className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                                                            >
                                                                <X className="h-5 w-5" />
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader className="animate-spin h-5 w-5 mr-2" />
                                                {submissionType === 'enquiry' ? 'Sending...' : 'Submitting...'}
                                            </>
                                        ) : (
                                            <>
                                                {submissionType === 'enquiry' ? (
                                                    <Mail className="h-5 w-5 mr-2" />
                                                ) : (
                                                    <Upload className="h-5 w-5 mr-2" />
                                                )}
                                                {submissionType === 'enquiry' ? 'Send Enquiry' : 'Submit Assignment'}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Information Sidebar */}
                    <div className="space-y-6">
                        {/* Assignment Details */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20 dark:border-gray-700/50">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <BookOpen className="h-6 w-6 mr-2 text-blue-500" />
                                Assignment Details
                            </h2>

                            <div className="space-y-4">
                                {sampleAssignments.map(assignment => (
                                    <div
                                        key={assignment.id}
                                        className={`p-4 rounded-lg border ${formData.assignmentId === assignment.id ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20' : 'border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-700/50'}`}
                                    >
                                        <h3 className="font-medium text-gray-900 dark:text-white">
                                            {assignment.id}: {assignment.title}
                                        </h3>
                                        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                                            <div>
                                                <p className="text-gray-500 dark:text-gray-400">Due Date</p>
                                                <p className="text-gray-900 dark:text-white">{formatDate(assignment.submissionDue)}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 dark:text-gray-400">Status</p>
                                                <p className="text-gray-900 dark:text-white">
                                                    {new Date(assignment.submissionDue) > new Date() ? 'Open' : 'Closed'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submission Guidelines */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20 dark:border-gray-700/50">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <Info className="h-6 w-6 mr-2 text-blue-500" />
                                Submission Guidelines
                            </h2>

                            <div className="space-y-4">
                                <div className="border-b border-gray-200/50 dark:border-gray-700/50 pb-4">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                        File Requirements
                                    </h3>
                                    <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                                        <li>Maximum file size: 10MB per file</li>
                                        <li>Accepted formats: PDF, DOC/DOCX, ZIP</li>
                                        <li>Name files clearly (e.g., IT802-001_YourName.pdf)</li>
                                    </ul>
                                </div>

                                <div className="border-b border-gray-200/50 dark:border-gray-700/50 pb-4">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                        Late Submissions
                                    </h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        Late submissions will be penalized by 10% per day unless prior arrangements have been made.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                        Confirmation
                                    </h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        You will receive an email confirmation with submission details. Keep this for your records.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Assignments;