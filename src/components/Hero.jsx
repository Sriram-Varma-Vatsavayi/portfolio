import { personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-soft-blue to-soft-purple border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-3xl font-medium text-primary-700">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl sm:text-5xl font-light text-primary-900 dark:text-white mb-6">
          {personalInfo.name}
        </h1>

        <p className="text-xl text-primary-600 dark:text-primary-400 mb-4 font-medium">
          Information Technology Student & ML Enthusiast
        </p>

        <p className="text-lg text-primary-500 dark:text-primary-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I create things with ❤️ - from machine learning models to system tools, 
          always focused on solving real-world problems through technology.
        </p>

        {/* Simple CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-3 bg-primary-800 hover:bg-primary-900 text-white rounded-full font-medium transition-all duration-200 hover:scale-105"
          >
            View Projects
          </button>
          
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-3 text-primary-600 hover:text-primary-800 font-medium transition-colors"
          >
            Say Hello 👋
          </button>
        </div>

        {/* Minimal Social Links */}
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;