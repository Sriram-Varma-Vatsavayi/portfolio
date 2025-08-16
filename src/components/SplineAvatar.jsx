import { useEffect, useRef } from 'react';

const SplineAvatar = ({ className = "", isVisible = true }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Optimize iframe loading when visible
    if (isVisible && iframeRef.current) {
      // Add any additional iframe optimizations if needed
      iframeRef.current.loading = 'lazy';
    }
  }, [isVisible]);

  return (
    <div className={`${className}`} style={{ width: '100%', height: '100%', minHeight: '600px' }}>
      <iframe 
        ref={iframeRef}
        src='https://my.spline.design/nexbotrobotcharacterconcept-hGpLk97LOJvr5n9Rl7UzPraJ/' 
        frameBorder='0' 
        width='100%' 
        height='100%'
        style={{
          border: 'none',
          borderRadius: '12px',
          overflow: 'hidden'
        }}
        title="3D Avatar"
        loading="lazy"
        allowFullScreen
      />
      
      {/* Status indicator */}
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
        Spline Avatar
      </div>
    </div>
  );
};

export default SplineAvatar;