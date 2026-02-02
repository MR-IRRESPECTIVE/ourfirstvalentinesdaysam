import { motion } from "framer-motion";
import { useState } from "react";

interface ScreenOneProps {
  onNext: () => void;
}

const ScreenOne = ({ onNext }: ScreenOneProps) => {
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
  };

  // Calculate scale based on click count (capped for usability)
  const yesScale = 1 + Math.min(noClickCount * 0.15, 0.6);
  const noScale = Math.max(1 - noClickCount * 0.1, 0.5);

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
          Baby, do you want to
          <br />
          <span className="text-gradient-romantic font-semibold">
            see something?
          </span>
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.button
          onClick={onNext}
          className="font-soft font-semibold rounded-full px-10 py-4 text-lg bg-primary text-primary-foreground shadow-button-romantic focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          animate={{ scale: yesScale }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          whileHover={{ scale: yesScale * 1.05 }}
          whileTap={{ scale: yesScale * 0.95 }}
        >
          Yes 💕
        </motion.button>
        <motion.button
          onClick={handleNoClick}
          className="font-soft font-semibold rounded-full px-10 py-4 text-lg border-2 border-primary text-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          animate={{ scale: noScale }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          whileHover={{ scale: noScale * 1.05 }}
          whileTap={{ scale: noScale * 0.95 }}
        >
          No 🙈
        </motion.button>
      </motion.div>

      <motion.p
        className="mt-8 text-muted-foreground text-sm font-soft"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        go on, pick one...
      </motion.p>
    </motion.div>
  );
};

export default ScreenOne;
