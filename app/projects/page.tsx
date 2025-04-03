export default function Projects() {
    return (
        <div className="p-10 mt-16 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">Book Recommendation System</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">It uses Exploratory Data Analysis.ML Model.</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/Ruddxxy/book-recommendation-system"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-500 dark:bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-600 dark:hover:bg-purple-700 transition"
                            >
                                GitHub Repo
                            </a>
                            <a
                                href="https://example.com/project1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded hover:bg-pink-600 dark:hover:bg-pink-700 transition"
                            >
                                Live Site
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 