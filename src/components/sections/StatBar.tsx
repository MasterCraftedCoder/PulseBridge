import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { formatNumber } from '@/lib/utils';

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

interface StatBarProps {
  stats: Stat[];
  backgroundColor?: string;
}

const StatBar: React.FC<StatBarProps> = ({ 
  stats, 
  backgroundColor = "bg-white" 
}) => {
  return (
    <section className={`py-16 ${backgroundColor} border-y border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              stat={stat}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter: React.FC<{ stat: Stat; delay: number }> = ({ stat, delay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value, hasAnimated]);

  const displayValue = typeof stat.value === 'number' && stat.value >= 1000 
    ? formatNumber(count) 
    : count.toLocaleString();

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="text-3xl md:text-4xl font-bold gradient-text mb-2"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {stat.prefix}{displayValue}{stat.suffix}
      </motion.div>
      <div className="text-gray-600 font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
};

export default StatBar;