import { motion } from "framer-motion";

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts = ({ count = 15 }: FloatingHeartsProps) => {
  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 6,
    size: 16 + Math.random() * 24,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary"
          style={{
            left: heart.left,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
          initial={{ y: "100vh", scale: 0.5 }}
          animate={{ y: "-100vh", scale: 1 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          💕
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
