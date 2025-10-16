// src/components/ScrollLeft.jsx
import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useAnimationFrame, useScroll, useVelocity } from 'framer-motion';
import { wrap } from '@motionone/utils';

export default function ScrollLeft({
 
  baseVelocity = +0.9,          // slower speed
  scrollDependent = false,
  delay = 0,
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], { clamp: false });
  const directionFactor = useRef(1);
  const hasStarted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      hasStarted.current = true;
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useAnimationFrame((t, delta) => {
    if (!hasStarted.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 10000);

    if (scrollDependent) {
      if (velocityFactor.get() < 0) directionFactor.current = -1;
      else if (velocityFactor.get() > 0) directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex whitespace-nowrap gap-10 flex-nowrap" style={{ x }}>
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-gray-400 block sm:text-[8vw] text-[11vw]">
           Web development fueled by creativity.
          </span>
        ))}
      </motion.div>
    </div>
  );
}
