import { volunteerExperience } from '../data/portfolioData';

const Volunteer = () => {
  return (
    <section id="volunteer" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-light text-primary-900 dark:text-white mb-4">
            Community & Leadership
          </h2>
          <p className="text-primary-600 dark:text-primary-400 text-lg">
            Contributing to causes I believe in
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {volunteerExperience.map((experience, index) => (
            <div key={experience.id} className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-medium text-primary-900 dark:text-white">
                    {experience.role}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mt-1">
                    {experience.organization}
                  </p>
                </div>
                <div className="text-sm text-primary-500 dark:text-primary-400 font-medium">
                  {experience.duration}
                </div>
              </div>

              {/* Description */}
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                {experience.description}
              </p>

              {/* Achievements */}
              <div className="flex flex-wrap gap-2">
                {experience.id === 1 && (
                  <>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                      Certificate with Distinction
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">
                      Leadership Training
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 text-xs font-medium rounded-full">
                      Community Service
                    </span>
                  </>
                )}
                
                {experience.id === 2 && (
                  <>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">
                      Event Management
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                      ₹50,000+ Sponsorships
                    </span>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-400 text-xs font-medium rounded-full">
                      Environmental Focus
                    </span>
                  </>
                )}
              </div>

              {index < volunteerExperience.length - 1 && (
                <div className="border-b border-primary-200 dark:border-primary-700 mt-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="border-t border-primary-200 dark:border-primary-700 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-xl font-medium text-primary-900 dark:text-white mb-4">
              What I Bring
            </h3>
            <p className="text-primary-600 dark:text-primary-400">
              Values developed through community involvement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-primary-900 dark:text-white mb-2">Leadership</h4>
                <p className="text-sm text-primary-600 dark:text-primary-400">
                  Developed through training and organizational roles
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-primary-900 dark:text-white mb-2">Service</h4>
                <p className="text-sm text-primary-600 dark:text-primary-400">
                  Committed to community impact and environmental causes
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-primary-900 dark:text-white mb-2">Initiative</h4>
                <p className="text-sm text-primary-600 dark:text-primary-400">
                  Proactive in organizing events and securing sponsorships
                </p>
              </div>
            </div>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-light text-primary-900 dark:text-white">2</div>
              <div className="text-sm text-primary-600 dark:text-primary-400">Organizations</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-light text-accent-600 dark:text-accent-400">4+</div>
              <div className="text-sm text-primary-600 dark:text-primary-400">Years Active</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-light text-primary-900 dark:text-white">50K+</div>
              <div className="text-sm text-primary-600 dark:text-primary-400">Sponsorships</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-light text-accent-600 dark:text-accent-400">A</div>
              <div className="text-sm text-primary-600 dark:text-primary-400">NCC Grade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;