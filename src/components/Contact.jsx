import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-light text-primary-900 dark:text-white mb-8">
            Let's Connect
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-primary-700 dark:text-primary-300 leading-relaxed">
              I'm currently looking for new opportunities and exciting projects to work on.
            </p>
            
            <p className="text-primary-600 dark:text-primary-400 leading-relaxed">
              Whether you have a question, want to collaborate, or just want to say hello, 
              I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="text-center space-y-12">
          {/* Primary Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-primary-900 dark:text-white">
              Get in Touch
            </h3>
            
            <div className="flex justify-center">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-1 border-t border-primary-200 dark:border-primary-700"></div>
            <div className="mx-6 text-sm text-primary-500 dark:text-primary-400">or find me on</div>
            <div className="flex-1 border-t border-primary-200 dark:border-primary-700"></div>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-primary-200 dark:border-primary-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-primary-900 dark:text-white">LinkedIn</div>
                  <div className="text-sm text-primary-600 dark:text-primary-400">Professional network</div>
                </div>
              </div>
            </a>

            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-primary-200 dark:border-primary-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-primary-900 dark:text-white">GitHub</div>
                  <div className="text-sm text-primary-600 dark:text-primary-400">Code & projects</div>
                </div>
              </div>
            </a>

            <div className="group p-6 border border-primary-200 dark:border-primary-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="font-medium text-primary-900 dark:text-white">Status</div>
                  <div className="text-sm text-primary-600 dark:text-primary-400">Available for opportunities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-8 border-t border-primary-200 dark:border-primary-700">
            <p className="text-sm text-primary-500 dark:text-primary-400">
              I typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;