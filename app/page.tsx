import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-purple-600">
              My Portfolio
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition">
                About
              </Link>
              <Link href="/skills" className="text-gray-700 hover:text-purple-600 transition">
                Skills
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-purple-600 transition">
                Projects
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition">
                Blog
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-purple-600 focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 mb-6">
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full p-[3px]">
            {/* Image */}
            <img
              src="zoro.jpg" // Replace with your profile image path
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Rudra Narayan Mohapatro</h1>

        {/* Description */}
        <p className="text-lg mb-6 max-w-xl">
          A passionate software engineer with a keen interest in cybersecurity. I am a CSE undergrad student at NIT, Rourkela.
        </p>

        {/* Call-to-action Buttons */}
        <div className="flex space-x-4">
          <Link 
            href="/projects"
            className="bg-transparent border border-white text-white-500 px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition duration-300 font-bold"
          >
            View My Projects
          </Link>
          <Link 
            href="/contact"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg shadow hover:bg-white hover:text-purple-500 transition duration-300 font-bold"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-12 px-4 max-w-screen-xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Explore My Work</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">About Me</h3>
            <p className="text-gray-600 mb-4">Be aware because batman is coming.</p>
            <Link 
              href="/about"
              className="text-purple-500 hover:text-purple-700 font-medium"
            >
              Read More →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills</h3>
            <p className="text-gray-600 mb-4">Billionaire's Wardrobe.</p>
            <Link 
              href="/skills"
              className="text-purple-500 hover:text-purple-700 font-medium"
            >
              View Skills →
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Projects</h3>
            <p className="text-gray-600 mb-4">Some projectssss(Batmobile,Batrang,Sonar bleh,bleh).</p>
            <Link 
              href="/projects"
              className="text-purple-500 hover:text-purple-700 font-medium"
            >
              View Projects →
            </Link>
          </div>

          {/* Add more cards as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-500 border-t border-gray-200 mt-auto">
        © 2025 Rudra Narayan Mohapatro. All rights reserved.
      </footer>
    </div>
  );
}
