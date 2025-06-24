"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect, useState } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function AnimatedSection({ 
  children, 
  delay = 0,
  className = ""
}: AnimatedSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
  });

  // Este useEffect garante que a animação só aconteça no cliente
  // O conteúdo é renderizado normalmente para os crawlers
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-500`}
      style={isMounted ? {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transitionDelay: `${delay}ms`,
      } : {}}
    >
      {children}
    </div>
  );
}