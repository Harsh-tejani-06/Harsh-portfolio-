import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is touch-based
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Add hover detection
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, .hoverable'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Initial setup
    setTimeout(addHoverListeners, 100);
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="rounded-full transition-all duration-150 ease-out"
          style={{
            width: isHovering ? 50 : 20,
            height: isHovering ? 50 : 20,
            border: `2px solid ${isHovering ? '#ff006e' : '#00f3ff'}`,
            backgroundColor: isHovering ? 'rgba(255, 0, 110, 0.15)' : 'transparent',
            boxShadow: isHovering 
              ? '0 0 30px rgba(255, 0, 110, 0.6)' 
              : '0 0 15px rgba(0, 243, 255, 0.6)',
          }}
        />
      </div>

      {/* Cursor trail */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: isHovering ? 70 : 35,
            height: isHovering ? 70 : 35,
            backgroundColor: 'rgba(0, 243, 255, 0.15)',
            transition: 'all 0.2s ease-out',
          }}
        />
      </div>

      {/* Hide default cursor on desktop */}
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
