"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "right" | "left" | "fade";
}

export function AnimateOnScroll({
  children,
  className = "",
  delayMs = 0,
  direction = "up",
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  const getInitialClasses = () => {
    if (direction === "up") return "opacity-0 translate-y-8";
    if (direction === "right") return "opacity-0 -translate-x-8";
    if (direction === "left") return "opacity-0 translate-x-8";
    return "opacity-0 scale-95";
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : getInitialClasses()
      } ${className}`}
    >
      {children}
    </div>
  );
}
