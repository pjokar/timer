import React, { useState, useEffect, FC } from "react";
import { outputFormat } from "./helpers";

import Display from "./components/Display/Display";
import StartStopButton from "./components/StartStopButton/StartStopButton";
import ResetButton from "./components/ResetButton/ResetButton";

import { Modes } from "./types";

import "./App.css";

let initialDate = new Date(1900, 1, 1, 0, 0, 0);

const App: FC = () => {
  const [time, setTime] = useState(initialDate);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        const newTime = new Date(time);
        newTime.setSeconds(time.getSeconds() + 1);
        setTime(newTime);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [started, time, setTime]);

  const start = () => {
    setStarted(true);
  };

  const stop = () => {
    setStarted(false);
  };

  const reset = () => {
    setStarted(false);
    setTime(initialDate);
  };

  return (
    <div className="app">
      <div className="displayContainer">
        <Display time={outputFormat(time)} />
      </div>
      <div className="buttonContainer">
        <ResetButton clickHandler={reset} />
        <StartStopButton onStart={start} onStop={stop} hasStarted={started} />
      </div>
    </div>
  );
};

export default App;
