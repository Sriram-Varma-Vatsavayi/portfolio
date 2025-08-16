const ProfessionalHeadshot = ({ className = "", imageSrc = null }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Professional headshot container */}
      <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl overflow-hidden shadow-2xl">
        
        {imageSrc ? (
          /* Actual professional photo */
          <div className="absolute inset-0">
            <img 
              src={imageSrc}
              alt="Professional headshot"
              className="w-full h-full object-cover object-center"
            />
            
            {/* Professional overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>
            <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-12 left-8 w-3 h-3 bg-indigo-400/30 rounded-full animate-pulse delay-1000"></div>
          </div>
        ) : (
          /* Placeholder for actual photo */
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
            
            {/* Professional avatar placeholder */}
            <div className="relative">
              {/* Head silhouette */}
              <div className="w-48 h-60 bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-t-full relative">
                
                {/* Professional suit silhouette */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-56 h-32 bg-gradient-to-b from-slate-800 to-slate-900 dark:from-slate-400 dark:to-slate-500 rounded-t-3xl">
                  
                  {/* Suit lapels */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-white dark:bg-slate-200 rounded-sm"></div>
                  
                  {/* Tie */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-16 bg-blue-600 dark:bg-blue-400 rounded-sm"></div>
                </div>
                
                {/* Glasses silhouette */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className="w-8 h-6 border-2 border-slate-500 dark:border-slate-300 rounded-full"></div>
                  <div className="w-8 h-6 border-2 border-slate-500 dark:border-slate-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Professional overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-12 left-8 w-3 h-3 bg-indigo-400/40 rounded-full animate-pulse delay-1000"></div>

            {/* Photo placeholder text */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-black/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                Professional Photo
              </div>
            </div>
          </div>
        )}

        {/* Border decoration */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 dark:ring-white/10"></div>
      </div>
    </div>
  );
};

export default ProfessionalHeadshot;