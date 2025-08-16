const CircularHeadshot = ({ className = "", imageSrc = null }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Circular professional headshot */}
      <div className="relative">
        {/* Outer ring with gradient */}
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 p-2 shadow-2xl">
          
          {/* Inner ring */}
          <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-3">
            
            {/* Image container */}
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
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
          </div>
        </div>

        {/* Floating accent dots */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-1000 shadow-lg"></div>
        <div className="absolute top-8 -left-6 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-500 shadow-lg"></div>
      </div>

      {/* Professional status indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularHeadshot;