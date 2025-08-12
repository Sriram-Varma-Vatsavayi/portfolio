import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-light text-primary-900 dark:text-white mb-4">
              About Me
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="md:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-primary-700 dark:text-primary-300 leading-relaxed text-lg font-light">
                  {personalInfo.objective}
                </p>
                
                <p className="text-primary-600 dark:text-primary-400 leading-relaxed mt-6">
                  Currently pursuing my Bachelor's in Information Technology at GRIET with a CGPA of 8.3, 
                  I'm passionate about machine learning and software development. Through various internships 
                  and projects, I've gained hands-on experience in Python, ML algorithms, and system development.
                </p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium text-primary-900 dark:text-white mb-6">
                  What I bring to the table
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-primary-600 dark:text-primary-300">Full-stack development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-primary-600 dark:text-primary-300">Machine learning & AI</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-primary-600 dark:text-primary-300">System architecture</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-primary-600 dark:text-primary-300">Problem solving</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-primary-600 dark:text-primary-300">Team collaboration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-primary-600 dark:text-primary-300">Continuous learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-primary-900 dark:text-white mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-primary-500 dark:text-primary-400 mb-1">Location</div>
                    <div className="text-primary-800 dark:text-primary-200 font-medium">{personalInfo.location}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-primary-500 dark:text-primary-400 mb-1">Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-accent-600 hover:text-accent-700 transition-colors font-medium block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  
                  <div>
                    <div className="text-sm text-primary-500 dark:text-primary-400 mb-1">Status</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-primary-800 dark:text-primary-200 font-medium">Available for opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <span>Get in touch</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;