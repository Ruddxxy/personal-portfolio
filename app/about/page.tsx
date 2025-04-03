export default function About() {
    return (
        <div className="p-10 mt-16 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-purple-600 dark:text-purple-400">About Me</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Main Content Card */}
                <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="p-6 md:p-8">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Personal Profile</h2>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Hi, I'm a software engineer with a passion for building web and mobile applications. 
                            My keen interest in Cybersecurity fuels my drive to create secure and reliable systems.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-purple-500 dark:border-purple-400 pl-4 bg-purple-50 dark:bg-purple-900/20">
                            I'm a quick learner and I'm always looking for new challenges.
                        </p>
                    </div>
                </div>

                {/* Education Card */}
                <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="p-6 md:p-8">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Education</h2>
                        </div>
                        <div className="space-y-6">
                            {/* Current Education */}
                            <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">National Institute of Technology, Rourkela</h3>
                                <p className="text-gray-600 dark:text-gray-400">Bachelor of Technology in Computer Science and Engineering</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">2022 - Present</p>
                                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        CGPA: 5.11/10
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Specialization in Problem Solving
                                    </li>
                                </ul>
                            </div>

                            {/* Higher Secondary */}
                            <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Sai International School</h3>
                                <p className="text-gray-600 dark:text-gray-400">Science Stream with Maths, Chemistry and Physics</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">2020 - 2022</p>
                                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Percentage: 70%
                                    </li>
                                </ul>
                            </div>

                            {/* Secondary Education */}
                            <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">D.A.V. Public School</h3>
                                <p className="text-gray-600 dark:text-gray-400">Secondary Education</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">2018 - 2020</p>
                                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Percentage: 85%
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Active participation in Science Club
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 