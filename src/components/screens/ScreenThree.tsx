import { motion } from "framer-motion";
import ValentineButton from "../ValentineButton";

interface ScreenThreeProps {
  onNext: () => void;
}

const ScreenThree = ({ onNext }: ScreenThreeProps) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-6xl mb-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
      >
        🌹
      </motion.div>

      <motion.div
        className="bg-card/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-card-romantic border border-primary/10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="font-romantic text-2xl text-center text-foreground mb-4">
          My Dearest Tara
        </h3>

        <div className="space-y-4 text-foreground/90 font-soft text-sm leading-relaxed">
          <p>
            From the moment you came into my life, everything changed. The colors
            became brighter, the music sweeter, and every day I cherished waking up
            and seeing you smile.
          </p>

          <p>
            You are not just my Valentine — you are my favorite notification and my
            hardest goodbye. You are the reason I believe in magic, because what
            we have feels nothing short of magical.
          </p>

          <p>
            Thank you for being patient with me, for laughing at my silly jokes,
            and for holding my hand through every storm. You make me want to be a
            better person every single day.
          </p>

          <p className="text-primary font-semibold text-center pt-2">
            I love you more than words could ever say.
            <br />
            Happy Valentine's Day! 💕
          </p>
        </div>

        <motion.div
          className="flex justify-end mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="font-romantic text-lg text-primary italic">
            Forever Yours ✨
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ValentineButton onClick={onNext} variant="primary" size="large">
          One last thing 💝
        </ValentineButton>
      </motion.div>
    </motion.div>
  );
};

export default ScreenThree;
