import { useEffect, useState } from "react";
import "./PlantLoader.css"; 

const PlantLoader = () => {
  const [_, setJumpCount] = useState(0);
  const [isBackflip, setIsBackflip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setJumpCount(prev => {
        const next = prev + 1;
        if ((next) % 14 === 0) {
          setIsBackflip(true);
          setTimeout(() => setIsBackflip(false), 2000); // duration of backflip animation
        }
        return next;
      });
    }, 2000); // normal hop duration
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="potted-plant-spinner">
      <span className={`plant ${isBackflip ? "backflip" : ""}`}>🪴</span>
    </div>
  );
};

export default PlantLoader;
