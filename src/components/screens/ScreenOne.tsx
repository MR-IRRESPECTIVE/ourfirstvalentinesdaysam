import { motion } from "framer-motion";
import ValentineButton from "../ValentineButton";

interface ScreenOneProps {
  onNext: () => void;
}

const ScreenOne = ({ onNext }: ScreenOneProps) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="font-romantic text-3xl md:text-4xl leading-relaxed text-foreground">
          ladies remember
          <br />
          <span className="text-gradient-romantic font-semibold">
            if he wanted to,
          </span>
          <br />
          <span className="text-gradient-romantic font-semibold">he would.</span>
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <ValentineButton onClick={onNext} variant="primary" size="large">
          Yes 💕
        </ValentineButton>
        <ValentineButton onClick={onNext} variant="outline" size="large">
          No 🤔
        </ValentineButton>
      </motion.div>

      <motion.p
        className="mt-8 text-muted-foreground text-sm font-soft"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        tap to continue...
      </motion.p>
    </motion.div>
  );
};

export default ScreenOne;
