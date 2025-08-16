const MinimalistHeadshot = ({ className = "", imageSrc = null }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Minimalist container */}
      <div className="relative">
        
        {/* Clean image frame */}
        <div className="relative bg-white dark:bg-gray-900 p-4 shadow-lg">
          
          {/* Image container */}
          <div className="w-72 h-96 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            {imageSrc ? (
              <img 
                src={imageSrc}
                alt="Professional headshot"
                className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-400 text-lg">Professional Photo</div>
              </div>
            )}
          </div>

          {/* Minimal border accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* Clean typography */}
        <div className="mt-8 text-center">
          <div className="space-y-2">
            <div className="w-24 h-0.5 bg-blue-500 mx-auto"></div>
            <h3 className="text-2xl font-light text-gray-900 dark:text-white tracking-wide">
              SRIRAM VARMA
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-light tracking-widest text-sm uppercase">
              Software Engineer
            </p>
            <div className="w-24 h-0.5 bg-blue-500 mx-auto"></div>
          </div>
        </div>

        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gray-300 dark:border-gray-600"></div>
        <div className="absolute bottom-8 right-0 w-8 h-8 border-r-2 border-b-2 border-gray-300 dark:border-gray-600"></div>
      </div>
    </div>
  );
};

export default MinimalistHeadshot;