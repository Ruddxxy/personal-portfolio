export default function Blog() {
    return (
        <div className="p-10 mt-16 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-purple-600">Blog</h1>
            <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Blog Post 1</h2>
                    <p className="text-gray-600 mb-4">Blog post description.</p>
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