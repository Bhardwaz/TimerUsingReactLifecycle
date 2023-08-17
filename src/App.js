import "./styles.css";
import TimerWrapper from "./timer/TimerWrapper";

export default function App() {
  const onExpires = () => {
    console.log("Expired");
  };
  return (
    <div className="App">
      <TimerWrapper />
    </div>
  );
}
