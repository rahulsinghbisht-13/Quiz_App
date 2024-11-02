import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 5);
    }, 5);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <progress value={remainingTime} max={timer}></progress>;
}
