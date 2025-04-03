import React from 'react';

const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-purple-600 mb-12">
          My Technical Skills
        </h1>

        {/* Skills Section */}
        <div className="space-y-10">
          {/* Languages */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Languages</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              {['Python', 'C', 'C++', 'Dart', 'JavaScript', 'TypeScript', 'HTML', 'CSS'].map((lang) => (
                <li key={lang} className="text-gray-700 font-medium bg-gray-100 p-3 rounded-lg shadow hover:bg-purple-100 transition">
                  {lang}
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Systems */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Operating Systems</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              {['Windows', 'MacOS', 'Kali Linux', 'Ubuntu', 'Black Arch', 'Parrot OS'].map((os) => (
                <li key={os} className="text-gray-700 font-medium bg-gray-100 p-3 rounded-lg shadow hover:bg-purple-100 transition">
                  {os}
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Tools */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Developer Tools</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              {['VS Code', 'Sublime', 'Vim', 'Nano', 'Jupyter Notebook'].map((tool) => (
                <li key={tool} className="text-gray-700 font-medium bg-gray-100 p-3 rounded-lg shadow hover:bg-purple-100 transition">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies/Frameworks */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies & Frameworks</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              {['ReactJS', 'MongoDB', 'Matplotlib', 'Numpy', 'Seaborn', 'Keras'].map((tech) => (
                <li key={tech} className="text-gray-700 font-medium bg-gray-100 p-3 rounded-lg shadow hover:bg-purple-100 transition">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
