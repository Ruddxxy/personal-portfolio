import './globals.css'
import Link from 'next/link';
import { ThemeProvider } from './theme-provider';
import ThemeToggle from './components/ThemeToggle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 w-full z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                  {/* Logo */}
                  <Link className="text-xl font-bold text-blue-600 dark:text-blue-400" href="/">
                    My Portfolio
                  </Link>

                  <div className="flex items-center space-x-6">
                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                      <Link className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition" href="/">
                        Home
                      </Link>
                      <Link className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition" href="/about">
                        About
                      </Link>
                      <Link className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition" href="/skills">
                        Skills
                      </Link>
                      <Link className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition" href="/projects">
                        Projects
                      </Link>
                      <Link className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition" href="/blog">
                        Blog
                      </Link>
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                      <button
                        type="button"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                      >
                        ☰
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {children}

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-auto">
              © {new Date().getFullYear()} [Rudra Narayan Mohapatro]. All rights reserved.
              Software Engineer
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
