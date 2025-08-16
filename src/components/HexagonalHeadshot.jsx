const HexagonalHeadshot = ({ className = "", imageSrc = null }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Hexagonal container */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        
        {/* Hexagonal shape with CSS clip-path */}
        <div 
          className="w-72 h-72 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl relative"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        >
          {/* Inner hexagon for image */}
          <div 
            className="absolute inset-2 bg-white dark:bg-gray-900"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          >
            <div 
              className="absolute inset-2 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            >
              {imageSrc ? (
                <img 
                  src={imageSrc}
                  alt="Professional headshot"
                  className="w-full h-full object-cover object-center scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Professional Photo</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tech-inspired floating elements */}
        <div className="absolute top-4 right-8 w-4 h-4 bg-cyan-400 rotate-45 animate-pulse shadow-lg"></div>
        <div className="absolute bottom-8 left-4 w-3 h-3 bg-purple-500 rotate-45 animate-pulse delay-700 shadow-lg"></div>
        <div className="absolute top-12 left-8 w-2 h-2 bg-blue-400 rotate-45 animate-pulse delay-300 shadow-lg"></div>
        
        {/* Corner tech lines */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500 opacity-60"></div>
      </div>

      {/* Tech status bar */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-2 rounded-lg font-mono text-sm shadow-lg">
          <span className="text-cyan-400 dark:text-cyan-600">&gt;</span> Software Engineer
        </div>
      </div>
    </div>
  );
};

export default HexagonalHeadshot;