import { useState, useEffect } from "react";

export default function ProgressBar({ timer, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timeoutId = setTimeout(onTimeout, timer);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timer, onTimeout]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 5);
    }, 5);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <progress value={remainingTime} max={timer} className={mode}></progress>
  );
}
