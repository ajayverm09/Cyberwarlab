import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * ScrollReveal Component - Wraps children to reveal them on scroll
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to reveal
 * @param {string} props.animation - Animation type (fadeInUp, fadeInLeft, fadeInRight, scaleIn)
 * @param {number} props.delay - Animation delay in ms
 * @param {number} props.threshold - Intersection threshold (0-1)
 * @param {string} props.className - Additional CSS classes
 */
export default function ScrollReveal({
  children,
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  className = '',
}) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const animationClasses = {
    fadeInUp: 'opacity-0 translate-y-8',
    fadeInLeft: 'opacity-0 -translate-x-8',
    fadeInRight: 'opacity-0 translate-x-8',
    fadeInDown: 'opacity-0 -translate-y-8',
    scaleIn: 'opacity-0 scale-95',
    fadeIn: 'opacity-0',
  };

  const revealedClasses = {
    fadeInUp: 'opacity-100 translate-y-0',
    fadeInLeft: 'opacity-100 translate-x-0',
    fadeInRight: 'opacity-100 translate-x-0',
    fadeInDown: 'opacity-100 translate-y-0',
    scaleIn: 'opacity-100 scale-100',
    fadeIn: 'opacity-100',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? revealedClasses[animation] : animationClasses[animation]
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/**
 * StaggerChildren - Reveals children with staggered delays
 */
export function StaggerChildren({
  children,
  animation = 'fadeInUp',
  staggerDelay = 100,
  className = '',
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const animationClasses = {
    fadeInUp: 'opacity-0 translate-y-8',
    fadeInLeft: 'opacity-0 -translate-x-8',
    fadeInRight: 'opacity-0 translate-x-8',
    scaleIn: 'opacity-0 scale-95',
  };

  const revealedClasses = {
    fadeInUp: 'opacity-100 translate-y-0',
    fadeInLeft: 'opacity-100 translate-x-0',
    fadeInRight: 'opacity-100 translate-x-0',
    scaleIn: 'opacity-100 scale-100',
  };

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-out ${
              isVisible ? revealedClasses[animation] : animationClasses[animation]
            }`}
            style={{ transitionDelay: `${index * staggerDelay}ms` }}
          >
            {child}
          </div>
        ))
      ) : (
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? revealedClasses[animation] : animationClasses[animation]
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
