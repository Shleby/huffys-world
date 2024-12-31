import { motion } from 'framer-motion';

const codingSymbols = ['{ }', '( )', '[ ]', '< >', '// '];

export function AnimatedTrebleClef() {
  return (
    <div className="w-64 h-64 flex justify-center items-center">
      <motion.div
        className="text-6xl"
        initial={{ opacity: 1, rotateY: 0 }}
        animate={{ opacity: [1, 0, 1], rotateY: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {codingSymbols.map((symbol, index) => (
          <motion.span
            key={index}
            initial={{ display: 'none' }}
            animate={{ display: 'inline' }}
            transition={{ delay: index * 2, duration: 0 }}
          >
            {symbol}
          </motion.span>
        ))}
        <motion.span
          initial={{ display: 'inline' }}
          animate={{ display: 'none' }}
          transition={{ delay: codingSymbols.length * 2, duration: 0 }}
        >
          𝄞
        </motion.span>
      </motion.div>
    </div>
  );
}

