import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-700"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 border-4 border-white dark:border-gray-800 rounded-full z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                    {/* Duration Badge */}
                    <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-4">
                      {edu.duration}
                    </div>

                    {/* Institution */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.institution}
                    </h3>

                    {/* Degree */}
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                      {edu.degree}
                    </h4>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {edu.location}
                      </div>

                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {edu.grade}
                      </div>

                      {edu.activities && (
                        <div className="flex items-start text-gray-600 dark:text-gray-300">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-sm">{edu.activities}</span>
                        </div>
                      )}
                    </div>

                    {/* Achievement Indicator */}
                    {edu.id === 1 && (
                      <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Current
                      </div>
                    )}

                    {edu.id === 3 && edu.activities && (
                      <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Leadership
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">4+</div>
            <div className="text-gray-600 dark:text-gray-300">Years of Education</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">8.3</div>
            <div className="text-gray-600 dark:text-gray-300">Current CGPA</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">IT</div>
            <div className="text-gray-600 dark:text-gray-300">Specialization</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;