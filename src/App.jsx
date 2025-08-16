import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              &copy; 2025 Sriram Varma Vatsavayi. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React, Tailwind CSS, and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
