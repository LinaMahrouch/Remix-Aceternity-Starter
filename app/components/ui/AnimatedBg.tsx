// app/components/AnimatedBackground.tsx

import { motion } from 'framer-motion';
import React from 'react';

const backgroundVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 0],
    x: ["-100%", "100%", "200%"],
    y: ["-50%", "100%", "200%"],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1
    },
  },
};

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black overflow-hidden">
      {[...Array(10).keys()].map(i => (
        <motion.div
          key={i}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          style={{
            position: 'absolute',
            width: '2px',
            height: '100px',
            backgroundColor: 'white',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};
