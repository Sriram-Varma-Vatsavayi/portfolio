import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-light text-primary-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-primary-600 dark:text-primary-400 text-lg">
            My academic journey
          </p>
        </div>

        <div className="relative">
          {/* Simplified Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-200 dark:bg-primary-700"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={edu.id} className="relative pl-20">
                {/* Clean Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-white dark:bg-gray-900 border-2 border-primary-400 rounded-full"></div>

                {/* Minimalist Content Card */}
                <div className="space-y-4">
                  {/* Institution & Duration */}
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-medium text-primary-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <h4 className="text-primary-600 dark:text-primary-400 mt-1">
                        {edu.degree}
                      </h4>
                    </div>
                    <div className="text-sm text-primary-500 dark:text-primary-400 font-medium">
                      {edu.duration}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-primary-600 dark:text-primary-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {edu.location}
                    </div>

                    <div className="flex items-center text-primary-600 dark:text-primary-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {edu.grade}
                    </div>
                  </div>

                  {/* Activities */}
                  {edu.activities && (
                    <p className="text-primary-600 dark:text-primary-300 text-sm leading-relaxed">
                      {edu.activities}
                    </p>
                  )}

                  {/* Status Indicators */}
                  <div className="flex items-center space-x-3">
                    {edu.id === 1 && (
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        Current
                      </span>
                    )}
                    {edu.id === 3 && edu.activities && (
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">
                        <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Leadership
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified Summary Stats */}
        <div className="mt-20 border-t border-primary-200 dark:border-primary-700 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-light text-primary-900 dark:text-white">4+</div>
              <div className="text-sm text-primary-600 dark:text-primary-400">Years of Study</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-light text-accent-600 dark:text-accent-400">8.3</div>
              <div className="text-sm text-primary-600 dark:text-primary-400">Current CGPA</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-light text-primary-900 dark:text-white">IT</div>
              <div className="text-sm text-primary-600 dark:text-primary-400">Specialization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;