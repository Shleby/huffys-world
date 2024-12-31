import { motion } from 'framer-motion';

export function AnimatedMetronome() {
  return (
    <div className="w-64 h-64 flex justify-center items-center">
      <motion.div
        className="w-1 h-32 bg-blue-500 origin-bottom"
        animate={{ rotate: [-30, 30] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

