import React from 'react';

const SkillsPage: React.FC = () => {
  return (
    <div className="p-10 mt-16 max-w-6xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-400 mb-12">
        My Technical Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Languages Card */}
        <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Languages</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Python', 'C', 'C++', 'Dart', 'JavaScript', 'TypeScript', 'HTML', 'CSS'].map((lang) => (
                <div key={lang} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center text-gray-700 dark:text-gray-300 font-medium hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors">
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Operating Systems Card */}
        <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Operating Systems</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Windows', 'MacOS', 'Kali Linux', 'Ubuntu', 'Black Arch', 'Parrot OS'].map((os) => (
                <div key={os} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center text-gray-700 dark:text-gray-300 font-medium hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors">
                  {os}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Developer Tools Card */}
        <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Developer Tools</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['VS Code', 'Sublime', 'Vim', 'Nano', 'Jupyter Notebook'].map((tool) => (
                <div key={tool} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center text-gray-700 dark:text-gray-300 font-medium hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies/Frameworks Card */}
        <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Technologies & Frameworks</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['ReactJS', 'MongoDB', 'Matplotlib', 'Numpy', 'Seaborn', 'Keras'].map((tech) => (
                <div key={tech} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center text-gray-700 dark:text-gray-300 font-medium hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
