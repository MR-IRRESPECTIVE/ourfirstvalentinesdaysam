import { motion } from "framer-motion";
import QRCode from "react-qr-code";

const ScreenFour = () => {
  // Placeholder URL - can be customized
  const qrUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-5xl mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        💌
      </motion.div>

      <motion.h2
        className="font-romantic text-3xl md:text-4xl text-foreground mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Scan the
      </motion.h2>

      <motion.h2
        className="font-romantic text-4xl md:text-5xl text-gradient-romantic font-semibold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        QR Code 💕
      </motion.h2>

      <motion.div
        className="bg-card p-6 rounded-3xl shadow-card-romantic border border-primary/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
      >
        <div className="bg-white p-4 rounded-2xl">
          <QRCode
            value={qrUrl}
            size={180}
            bgColor="#ffffff"
            fgColor="#E91E63"
            level="H"
          />
        </div>
      </motion.div>

      <motion.p
        className="mt-8 text-muted-foreground font-soft text-sm max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        A special surprise awaits you...
      </motion.p>

      <motion.div
        className="mt-6 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="text-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            💖
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        className="mt-10 text-primary/60 font-soft text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Made with love 💕
      </motion.p>
    </motion.div>
  );
};

export default ScreenFour;
