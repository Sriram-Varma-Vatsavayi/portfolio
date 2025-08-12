import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and internship experiences in the field of Machine Learning and Technology
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 card-hover">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  {/* Company and Position */}
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                            {exp.company}
                          </h4>
                          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="inline-flex items-center px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full shadow-sm">
                          <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 6c2 0 4 2 4 4v4a4 4 0 11-8 0v-4c0-2 2-4 4-4z" />
                          </svg>
                          {exp.duration}
                        </div>
                        {index === 0 && (
                          <div className="mt-2">
                            <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                              Current
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Responsibilities & Achievements
                  </h5>
                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills/Technologies (inferred from responsibilities) */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {exp.id === 1 && (
                      <>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">Python</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">Machine Learning</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">LLM</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">Model Monitoring</span>
                      </>
                    )}
                    
                    {exp.id === 2 && (
                      <>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">AI/ML</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">SaaS</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">Market Research</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">Clustering</span>
                      </>
                    )}
                    
                    {exp.id === 3 && (
                      <>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">Team Collaboration</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">ML Models</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">Problem Solving</span>
                      </>
                    )}
                    
                    {exp.id === 4 && (
                      <>
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-sm font-medium rounded-full">Python</span>
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-sm font-medium rounded-full">System Auditing</span>
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-sm font-medium rounded-full">Analytics</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">4+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Internships Completed</div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">2+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Team Projects</div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">ML</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Specialization</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;