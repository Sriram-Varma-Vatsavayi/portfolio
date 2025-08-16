const FloatingCardHeadshot = ({ className = "", imageSrc = null }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Floating card container */}
      <div className="relative transform hover:scale-105 transition-all duration-500">
        
        {/* Main card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50">
          
          {/* Image container with tilt effect */}
          <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-64 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 shadow-xl">
              {imageSrc ? (
                <img 
                  src={imageSrc}
                  alt="Professional headshot"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Professional Photo</div>
                </div>
              )}
            </div>
            
            {/* Tape effect */}
            <div className="absolute -top-4 left-8 w-16 h-8 bg-yellow-200 opacity-70 rotate-12 shadow-sm"></div>
            <div className="absolute -top-4 right-8 w-16 h-8 bg-yellow-200 opacity-70 -rotate-12 shadow-sm"></div>
          </div>

          {/* Card details */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Sriram Varma Vatsavayi
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
              Software Engineer & ML Enthusiast
            </p>
            
            {/* Skills tags */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                ML/AI
              </span>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full blur-sm"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 -right-8 w-6 h-6 bg-cyan-400/30 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default FloatingCardHeadshot;