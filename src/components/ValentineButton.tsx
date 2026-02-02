import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ValentineButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
  className?: string;
}

const ValentineButton = ({
  children,
  onClick,
  variant = "primary",
  size = "default",
  className = "",
}: ValentineButtonProps) => {
  const baseStyles =
    "font-soft font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-button-romantic hover:shadow-lg hover:scale-105",
    secondary:
      "bg-secondary text-secondary-foreground shadow-romantic hover:bg-secondary/80 hover:scale-105",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
  };

  const sizes = {
    default: "px-8 py-3 text-base",
    large: "px-10 py-4 text-lg",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default ValentineButton;
