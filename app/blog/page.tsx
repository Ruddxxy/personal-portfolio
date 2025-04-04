export default function Blog() {
    return (
        <div className="p-10 mt-16 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">Blog</h1>
            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">Understanding Malwares</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Ransomware Protection</p>
                    <a 
                        href="https://example.com/blog-post1" 
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded hover:from-purple-600 hover:to-pink-600 transition"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
} 