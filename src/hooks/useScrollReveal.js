import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Configuration options
 * @param {string} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection
 * @returns {Object} { ref, isVisible }
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve after revealing (uncomment next line)
          // observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

/**
 * Higher-order component version for class-based animations
 */
export function withScrollReveal(WrappedComponent, animationClass = 'scroll-reveal') {
  return function ScrollRevealWrapper(props) {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

    return (
      <div
        ref={ref}
        className={`${animationClass} ${isVisible ? 'revealed' : ''}`}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}
