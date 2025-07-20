'use client';

import { useEffect, useRef, useState } from 'react';

import FadeIn from '@/components/ui/fade-in';

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: '160', label: 'лет истории', suffix: '+' },
  { value: '7', label: 'институтов' },
  { value: '50', label: 'студорганизаций', suffix: '+' },
  { value: '100', label: 'поддержки', suffix: '%' },
];

export const UniversityStats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl text-dark text-center mb-16">
            Статистика университета
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <FadeIn key={stat.label} className="delay-200">
              <div className="text-center group">
                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter 
                      value={parseInt(stat.value)} 
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-lime rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <p className="text-lg md:text-xl text-dark font-medium">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          animateCounter();
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  useEffect(() => {
    if (hasAnimated) {
      animateCounter();
    }
  }, [hasAnimated, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}; 