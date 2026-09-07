import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 650,
  className = '',
  threshold = 0.15,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Se o navegador não suportar IntersectionObserver, exibe imediatamente
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Dispara a animação apenas quando o elemento realmente entrar na tela durante a rolagem
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        // Garante que o elemento só dispara quando estiver visível no campo de visão do scroll
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'left':
        return 'translate3d(30px, 0, 0) scale(0.98)';
      case 'right':
        return 'translate3d(-30px, 0, 0) scale(0.98)';
      case 'down':
        return 'translate3d(0, -25px, 0) scale(0.98)';
      case 'scale':
      case 'pop':
        return 'translate3d(0, 25px, 0) scale(0.94)';
      case 'fade':
        return 'translate3d(0, 0, 0) scale(1)';
      case 'up':
      default:
        return 'translate3d(0, 30px, 0) scale(0.98)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
