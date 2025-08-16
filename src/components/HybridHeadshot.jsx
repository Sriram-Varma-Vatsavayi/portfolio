const HybridHeadshot = ({ className = "", imageSrc = null }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Animated outer border container */}
      <div className="relative p-1 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse w-full h-full max-w-lg mx-auto">
        
        {/* Rotating border animation */}
        <div className="absolute inset-0 rounded-3xl">
          <div 
            className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-75 animate-spin" 
            style={{animationDuration: '4s'}}
          ></div>
          <div className="absolute inset-1 rounded-3xl bg-white dark:bg-gray-900"></div>
        </div>

        {/* Floating card container */}
        <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-3 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105 transition-all duration-500">
          
          {/* Image container with minimalist hover effect */}
          <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="w-full h-[440px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 shadow-xl">
              {imageSrc ? (
                <img 
                  src={imageSrc}
                  alt="Professional headshot"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
                  style={{
                    filter: 'grayscale(100%)',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = 'grayscale(100%)';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Professional Photo</div>
                </div>
              )}
            </div>
            
            {/* Animated glowing border around image */}
            <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-50 animate-pulse"></div>
            
            {/* Minimalist accent lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
          </div>

          {/* Card details with animations */}
          <div className="mt-3 text-center">
            {/* Animated name with gradient */}
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse mb-1">
              Sriram Varma Vatsavayi
            </h3>
            
            {/* Animated title */}
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 animate-bounce text-sm" style={{animationDuration: '3s'}}>
              🚀 Software Engineer & ML Enthusiast
            </p>
            
            {/* Minimalist divider lines */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-2 animate-pulse"></div>
            
            {/* Floating card skill tags with animations */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-110 transition-transform duration-300 animate-pulse delay-100">
                React
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-110 transition-transform duration-300 animate-pulse delay-300">
                Python
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-110 transition-transform duration-300 animate-pulse delay-500">
                ML/AI
              </span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm hover:scale-110 transition-transform duration-300 animate-pulse delay-700">
                Node.js
              </span>
            </div>
            
            {/* Bottom accent line */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 animate-pulse delay-1000"></div>
          </div>

          {/* Floating particles from animated design */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-8 left-4 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/2 right-2 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-500"></div>
        </div>

        {/* Background decorative elements from floating card */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-bounce delay-200"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400/20 rounded-full blur-sm animate-bounce delay-700"></div>
        <div className="absolute top-1/2 -right-8 w-6 h-6 bg-cyan-400/30 rounded-full blur-sm animate-bounce delay-1000"></div>
      </div>

      {/* Orbiting elements from animated design */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60 delay-300"></div>
        <div className="absolute bottom-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-1000 opacity-60"></div>
      </div>
    </div>
  );
};

export default HybridHeadshot;