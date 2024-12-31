import { motion } from 'framer-motion';

export function AnimatedEqualizerBars() {
  return (
    <div className="w-64 h-64 flex items-end justify-around">
      {[1, 2, 3, 4, 5].map((bar) => (
        <motion.div
          key={bar}
          className="w-8 bg-blue-500"
          initial={{ height: 20 }}
          animate={{ height: [20, 100, 20] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: bar * 0.2,
          }}
        />
      ))}
    </div>
  );
}

