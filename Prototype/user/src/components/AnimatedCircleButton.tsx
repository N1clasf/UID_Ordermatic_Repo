import { useEffect, useState } from "react";

interface AnimatedCircleButtonProps {
  onClick: () => void;
  isActive: boolean;
}

const AnimatedCircleButton = ({ onClick, isActive }: AnimatedCircleButtonProps) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setRotation((prev) => (prev + 1) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  if (!isActive) {
    return (
      <button
        onClick={onClick}
        className="relative w-32 h-32 rounded-full transition-transform hover:scale-105 focus:outline-none"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-900">
          <div className="absolute inset-1 rounded-full bg-black" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-gray-800/20 to-transparent" />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="relative w-32 h-32 rounded-full transition-transform hover:scale-105 focus:outline-none"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-400 to-purple-600"
           style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-500 via-blue-300 to-purple-500 opacity-75 blur-sm" />
        <div className="absolute inset-2 rounded-full bg-black" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-purple-500/20 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-8 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-full blur-sm animate-pulse" />
      </div>
    </button>
  );
};

export default AnimatedCircleButton;