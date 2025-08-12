import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary-50 dark:bg-primary-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-500 dark:text-primary-400 text-sm">
            © 2025 Sriram Varma Vatsavayi
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
