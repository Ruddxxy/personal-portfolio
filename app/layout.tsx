import './globals.css'
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-gray-100">
          {/* Navbar */}
          <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <Link className="text-xl font-bold text-blue-600" href="/">
                  My Portfolio
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                  <Link className="text-gray-700 hover:text-yellow-600 transition" href="/">
                    Home
                  </Link>
                  <Link className="text-gray-700 hover:text-yellow-600 transition" href="/about">
                    About
                  </Link>
                  <Link className="text-gray-700 hover:text-yellow-600 transition" href="/skills">
                    Skills
                  </Link>
                  <Link className="text-gray-700 hover:text-yellow-600 transition" href="/projects">
                    Projects
                  </Link>
                  <Link className="text-gray-700 hover:text-yellow-600 transition" href="/blog">
                    Blog
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    type="button"
                    className="text-gray-700 hover:text-blue-600 focus:outline-none"
                  >
                    ☰
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {children}

          {/* Footer */}
          <footer className="bg-white py-6 text-center text-sm text-gray-500 border-t border-gray-200 mt-auto">
            © {new Date().getFullYear()} [Rudra Narayan Mohapatro]. All rights reserved.
              Software Engineer
          </footer>
        </div>
      </body>
    </html>
  );
}
