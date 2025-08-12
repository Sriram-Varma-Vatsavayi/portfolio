import { skills } from '../data/portfolioData';

const Skills = () => {
  const SkillBar = ({ skill, delay = 0 }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div 
          className="skill-bar h-2.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${skill.level}%`,
            animationDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );

  const SkillCard = ({ title, skillList, icon, color }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg card-hover">
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mr-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skillList.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} delay={index * 200} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical skills and expertise I've developed through education and hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {/* Programming Languages */}
          <SkillCard
            title="Programming Languages"
            skillList={skills.programmingLanguages}
            color="bg-blue-100 dark:bg-blue-900"
            icon={
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />

          {/* Developer Tools */}
          <SkillCard
            title="Developer Tools"
            skillList={skills.developerTools}
            color="bg-green-100 dark:bg-green-900"
            icon={
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />

          {/* Technical Areas - Span full width on smaller screens */}
          <div className="lg:col-span-2 xl:col-span-1">
            <SkillCard
              title="Technical Areas"
              skillList={skills.technicalAreas}
              color="bg-purple-100 dark:bg-purple-900"
              icon={
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Technology Stack Cloud */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technology Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'Java', 'Machine Learning', 'TensorFlow', 'XGBoost', 
              'OpenCV', 'Flask', 'Pandas', 'NumPy', 'Matplotlib', 
              'NLP', 'Spacy', 'NLTK', 'MediaPipe', 'PixelLib',
              'Jupyter Notebook', 'VS Code', 'GitHub', 'Google Colab',
              'Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS'
            ].map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default
                  ${index % 5 === 0 ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                    index % 5 === 1 ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                    index % 5 === 2 ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' :
                    index % 5 === 3 ? 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300' :
                    'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-300">Programming Languages</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">6</div>
            <div className="text-gray-600 dark:text-gray-300">Technical Areas</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4</div>
            <div className="text-gray-600 dark:text-gray-300">Developer Tools</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;