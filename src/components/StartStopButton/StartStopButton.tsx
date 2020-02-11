import React, { FC } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";

type Props = {
  hasStarted: boolean;
  onStart: () => void;
  onStop: () => void;
};

const StartStopButton: FC<Props> = ({ hasStarted, onStart, onStop }) => {
  return hasStarted ? (
    <StopButton clickHandler={onStop} />
  ) : (
    <StartButton clickHandler={onStart} />
  );
};

export default StartStopButton;
