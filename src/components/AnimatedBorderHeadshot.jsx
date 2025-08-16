const AnimatedBorderHeadshot = ({ className = "", imageSrc = null }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Animated border container */}
      <div className="relative p-1 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
        
        {/* Inner container */}
        <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-6">
          
          {/* Rotating border animation */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-75 animate-spin" style={{animationDuration: '3s'}}></div>
            <div className="absolute inset-1 rounded-3xl bg-white dark:bg-gray-900"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            
            {/* Image with glowing effect */}
            <div className="relative">
              <div className="w-64 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 shadow-xl">
                {imageSrc ? (
                  <img 
                    src={imageSrc}
                    alt="Professional headshot"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-gray-400 text-lg">Professional Photo</div>
                  </div>
                )}
              </div>
              
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-50 animate-pulse"></div>
            </div>

            {/* Animated text */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Sriram Varma Vatsavayi
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 animate-bounce" style={{animationDuration: '2s'}}>
                🚀 Software Engineer
              </p>
            </div>

            {/* Floating particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-4 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute top-1/2 right-2 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
      </div>

      {/* Orbiting elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-700 opacity-60"></div>
      </div>
    </div>
  );
};

export default AnimatedBorderHeadshot;