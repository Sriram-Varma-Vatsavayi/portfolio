import { projects } from '../data/portfolioData';

const Projects = () => {
  const ProjectCard = ({ project }) => (
    <div className="group cursor-pointer">
      <div className="space-y-4 p-6 rounded-lg border border-transparent hover:border-primary-200 hover:bg-primary-25 dark:hover:bg-primary-950/30 transition-all duration-300">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-medium text-primary-900 dark:text-white group-hover:text-accent-600 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <a 
              href={project.github} 
              className="text-primary-400 hover:text-primary-600 transition-colors p-1"
              target="_blank"
              rel="noopener noreferrer"
              title="View source code"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href={project.live} 
              className="text-primary-400 hover:text-accent-600 transition-colors p-1"
              target="_blank"
              rel="noopener noreferrer"
              title="View live project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        
        <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium text-primary-600 bg-primary-100 dark:bg-primary-800/50 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-light text-primary-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-primary-600 dark:text-primary-400 text-lg">
            A selection of my recent work
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="https://github.com/Sriram-Varma-Vatsavayi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-primary-600 hover:text-accent-600 border border-primary-200 hover:border-accent-300 rounded-lg transition-all duration-300 hover:shadow-sm"
          >
            <span className="mr-2">View all projects on GitHub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;