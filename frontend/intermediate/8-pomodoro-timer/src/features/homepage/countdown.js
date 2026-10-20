import { useState, useEffect, useRef } from "react";

function useCountdown(totalSeconds, onComplete) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const endTimeRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      const remaining = Math.max(
        0,
        Math.round((endTimeRef.current - Date.now()) / 1000),
      );
      setSecondsLeft(remaining);

      if (remaining === 0) {
        clearInterval(id);
        setIsRunning(false);
        onComplete?.();
      }
    }, 250);

    return () => clearInterval(id);
  }, [isRunning, onComplete]);

  const start = () => {
    endTimeRef.current = Date.now() + secondsLeft * 1000;
    setIsRunning(true);
  };
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setSecondsLeft(totalSeconds);
  };

  return { secondsLeft, isRunning, start, pause, reset };
}
