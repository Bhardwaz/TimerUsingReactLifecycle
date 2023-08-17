import { useState } from "react";
import Timer from "./index";
const TimerWrapper = ({ duration, onExpires, beforeRestart }) => {
  const [hasExpired, setHasExpired] = useState(false);

  const onExpireHelper = () => {
    onExpires && onExpires();
    setHasExpired(true);
  };

  const handleRestart = () => {
    setHasExpired(false);
  };

  return !hasExpired ? (
    <Timer duration={2 * 60 * 60 * 1000} onExpires={onExpireHelper} />
  ) : (
    <button onClick={handleRestart}> Restart </button>
  );
};
export default TimerWrapper;
