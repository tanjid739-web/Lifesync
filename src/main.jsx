import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const challenges = [
  { name: "Push Ups", duration: 30 },
  { name: "Squats", duration: 30 },
  { name: "Jumping Jacks", duration: 30 },
  { name: "Plank", duration: 30 },
];

function App() {
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(0);

  const workout = challenges[index];

  React.useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds((s) => {
        if (s >= workout.duration - 1) {
          setRunning(false);
          setCompleted((c) => c + 1);
          return 0;
        }
        return s + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running, workout.duration]);

  const nextWorkout = () => {
    setRunning(false);
    setSeconds(0);
    setIndex((i) => (i + 1) % challenges.length);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: 24,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>LifeSync 💪</h1>
      <p>Daily Home Workout</p>

      <div
        style={{
          background: "#1f2937",
          padding: 20,
          borderRadius: 16,
          maxWidth: 500,
          margin: "30px auto",
        }}
      >
        <h2>{workout.name}</h2>

        <p>
          Time: {seconds}s / {workout.duration}s
        </p>

        <button onClick={() => setRunning(!running)}>
          {running ? "Pause" : "Start"}
        </button>

        <button onClick={nextWorkout} style={{ marginLeft: 10 }}>
          Next
        </button>

        <hr />

        <p>Completed workouts: {completed}</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
