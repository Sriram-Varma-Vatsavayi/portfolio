import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-light text-primary-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-primary-600 dark:text-primary-400 text-lg">
            My professional journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-200 dark:bg-primary-700"></div>

          <div className="space-y-16">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                  index === 0 
                    ? 'bg-accent-500 border-accent-500 shadow-lg' 
                    : 'bg-white dark:bg-gray-900 border-primary-400'
                }`}>
                  {index === 0 && (
                    <div className="absolute inset-0 bg-accent-500 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-medium text-primary-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <div className="flex items-center mt-2 text-primary-600 dark:text-primary-400">
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.type}</span>
                        {index === 0 && (
                          <>
                            <span className="mx-2">•</span>
                            <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                              Current
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-primary-500 dark:text-primary-400 font-medium">
                      {exp.duration}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies/Skills used (if we want to add this in the future) */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium text-primary-600 bg-primary-100 dark:bg-primary-800/50 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 border-t border-primary-200 dark:border-primary-700 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-light text-primary-900 dark:text-white">
                {experience.length}+
              </div>
              <div className="text-sm text-primary-600 dark:text-primary-400">
                Positions Held
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-light text-accent-600 dark:text-accent-400">2+</div>
              <div className="text-sm text-primary-600 dark:text-primary-400">
                Years Experience
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-light text-primary-900 dark:text-white">ML/AI</div>
              <div className="text-sm text-primary-600 dark:text-primary-400">
                Specialization
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;