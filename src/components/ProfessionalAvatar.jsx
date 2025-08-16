import { useState, useEffect, useRef } from 'react';

const ProfessionalAvatar = ({ className = "", isVisible = true }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: (e.clientX - centerX) / (rect.width / 2),
          y: (e.clientY - centerY) / (rect.height / 2)
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`${className} relative flex items-center justify-center`} 
      style={{ minHeight: '600px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Avatar Container */}
      <div className="relative">
        {/* Professional Photo Placeholder */}
        <div 
          className={`w-80 h-80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
            isHovered ? 'shadow-3xl scale-105' : ''
          }`}
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 3}deg)`,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          {/* Photo Container */}
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
            {/* Replace this with your actual photo */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="text-white text-6xl font-bold">SV</span>
            </div>
          </div>
          
          {/* Overlay with subtle animation */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Floating Info Cards */}
        <div 
          className={`absolute -right-8 top-16 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl shadow-lg transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
        >
          <div className="text-sm font-semibold text-gray-800 dark:text-white">Information Technology</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">Student & ML Enthusiast</div>
        </div>

        <div 
          className={`absolute -left-8 bottom-16 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl shadow-lg transition-all duration-700 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          <div className="text-sm font-semibold text-gray-800 dark:text-white">8.3 CGPA</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">Academic Excellence</div>
        </div>

        {/* Subtle Particle Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse transition-all duration-1000 ${
                isHovered ? 'opacity-60' : 'opacity-20'
              }`}
              style={{
                left: `${20 + (i * 12)}%`,
                top: `${10 + (i * 15)}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Tech Stack Icons Floating Around */}
        <div className={`absolute transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute -top-4 left-1/4 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold animate-bounce">
            Py
          </div>
          <div className="absolute -bottom-4 right-1/4 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs font-bold animate-bounce delay-300">
            JS
          </div>
          <div className="absolute top-1/4 -right-4 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white text-xs font-bold animate-bounce delay-500">
            ML
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div 
        className={`absolute inset-0 bg-gradient-radial from-blue-400/20 via-purple-400/10 to-transparent rounded-full transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-50'
        }`} 
        style={{ transform: 'scale(1.5)' }}
      />
    </div>
  );
};

export default ProfessionalAvatar;