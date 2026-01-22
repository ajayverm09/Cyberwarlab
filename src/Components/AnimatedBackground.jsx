import { useEffect, useRef } from 'react';

/**
 * Animated Background Component
 * All animations permanently disabled - removed all red lining effects
 */
export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop - completely empty, all effects removed
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ALL ANIMATIONS PERMANENTLY DISABLED - NO RED LINING EFFECTS
      // - Particles removed
      // - Grid lines removed
      // - Scan line removed
      // - Animated circles removed
      // - All red lining effects removed

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
      }}
    />
  );
}
