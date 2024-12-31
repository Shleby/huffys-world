import { motion } from 'framer-motion';

export function AnimatedHeadphones() {
  return (
    <div className="w-64 h-64 flex justify-center items-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.path
          d="M20,50 Q20,20 50,20 Q80,20 80,50"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <motion.circle
          cx="20"
          cy="50"
          r="15"
          fill="#3B82F6"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.circle
          cx="80"
          cy="50"
          r="15"
          fill="#3B82F6"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        />
        <motion.path
          d="M35,50 Q50,60 65,50"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </svg>
    </div>
  );
}

