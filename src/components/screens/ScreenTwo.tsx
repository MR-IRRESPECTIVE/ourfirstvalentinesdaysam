import { motion } from "framer-motion";
import ValentineButton from "../ValentineButton";
import FloatingHearts from "../FloatingHearts";

interface ScreenTwoProps {
  onNext: () => void;
}

const ScreenTwo = ({ onNext }: ScreenTwoProps) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FloatingHearts count={20} />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="text-7xl mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ❤️
        </motion.div>

        <h2 className="font-romantic text-3xl md:text-4xl text-foreground mb-2">
          Then this is
        </h2>
        <h2 className="font-romantic text-4xl md:text-5xl text-gradient-romantic font-semibold mb-8">
          for you ❤️
        </h2>

        <motion.p
          className="text-muted-foreground font-soft mb-10 max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Someone special has a message waiting for you...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <ValentineButton onClick={onNext} variant="primary" size="large">
            Continue 💌
          </ValentineButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScreenTwo;
