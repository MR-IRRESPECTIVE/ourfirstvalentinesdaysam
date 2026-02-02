import { motion } from "framer-motion";

export default function Memories() {
  const driveLink =
    "https://drive.google.com/drive/folders/1h8ydWLMi2t5xkXH3E2CAHs7_eNKmqw7j";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-romantic px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center shadow-xl max-w-sm w-full"
      >
        <h2 className="text-2xl font-serif mb-4">
          Our Memories ❤️
        </h2>

        <p className="text-sm opacity-80 mb-6">
          Every picture here holds a moment,  
          a smile, a feeling — all ours.
        </p>

        <a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full shadow-md active:scale-95 transition"
        >
          Open our memories 💞
        </a>
      </motion.div>
    </div>
  );
}
