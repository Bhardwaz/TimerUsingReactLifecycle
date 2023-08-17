import { useState, useEffect } from "react";

// values in miliseconds
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const Timer = ({ duration, onExpires }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    // break conditions
    if (time <= 0) {
      onExpires && onExpires();
      clearTimeout(timerId);
    }

    // clean up
    return () => {
      clearTimeout(timerId);
    };
  }, [time, onExpires]);

  const getFormattedTime = (time) => {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);

    return `${days}: ${hours}: ${minutes}: ${seconds}`;
  };

  return getFormattedTime(time);
};

// Timer.defaultProps = {
//   duration: 60 * 1000
// };

export default Timer;
