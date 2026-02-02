import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScreenOne from "@/components/screens/ScreenOne";
import ScreenTwo from "@/components/screens/ScreenTwo";
import ScreenThree from "@/components/screens/ScreenThree";
import ScreenFour from "@/components/screens/ScreenFour";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const nextScreen = () => {
    setCurrentScreen((prev) => Math.min(prev + 1, 4));
  };

  return (
    <div className="min-h-screen bg-gradient-romantic overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <AnimatePresence mode="wait">
        {currentScreen === 1 && <ScreenOne key="screen1" onNext={nextScreen} />}
        {currentScreen === 2 && <ScreenTwo key="screen2" onNext={nextScreen} />}
        {currentScreen === 3 && <ScreenThree key="screen3" onNext={nextScreen} />}
        {currentScreen === 4 && <ScreenFour key="screen4" />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
