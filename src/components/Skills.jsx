import { skills } from '../data/portfolioData';

const Skills = () => {
  const SkillCategory = ({ title, skillList, icon }) => (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        {icon}
        <h3 className="text-lg font-medium text-primary-900 dark:text-white">
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skillList.map((skill, index) => (
          <div
            key={skill.name}
            className="group p-3 rounded-lg border border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
          >
            <div className="text-sm font-medium text-primary-800 dark:text-primary-200">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-light text-primary-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-primary-600 dark:text-primary-400 text-lg">
            The tools and technologies I work with
          </p>
        </div>

        <div className="space-y-16">
          {/* Programming Languages */}
          <SkillCategory
            title="Programming Languages"
            skillList={skills.programmingLanguages}
            icon={
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            }
          />

          {/* Technical Areas */}
          <SkillCategory
            title="Technical Areas"
            skillList={skills.technicalAreas}
            icon={
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            }
          />

          {/* Developer Tools */}
          <SkillCategory
            title="Developer Tools"
            skillList={skills.developerTools}
            icon={
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            }
          />
        </div>

        {/* Technology Stack - Minimalist Version */}
        <div className="mt-20 border-t border-primary-200 dark:border-primary-700 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-xl font-medium text-primary-900 dark:text-white mb-4">
              Technology Stack
            </h3>
            <p className="text-primary-600 dark:text-primary-400">
              Key technologies I use in my projects
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'Java', 'Machine Learning', 'TensorFlow', 'XGBoost', 
              'OpenCV', 'Flask', 'Pandas', 'NumPy', 'Matplotlib', 
              'NLP', 'Spacy', 'NLTK', 'MediaPipe', 'PixelLib',
              'Jupyter Notebook', 'VS Code', 'GitHub', 'Google Colab'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full border border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-light text-primary-900 dark:text-white">2+</div>
            <div className="text-sm text-primary-600 dark:text-primary-400">Languages</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl font-light text-accent-600 dark:text-accent-400">6+</div>
            <div className="text-sm text-primary-600 dark:text-primary-400">Technical Areas</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl font-light text-primary-900 dark:text-white">4+</div>
            <div className="text-sm text-primary-600 dark:text-primary-400">Dev Tools</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl font-light text-accent-600 dark:text-accent-400">20+</div>
            <div className="text-sm text-primary-600 dark:text-primary-400">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;