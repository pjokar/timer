import React, { FC } from "react";

import "./Button.css";

type Props = {
  clickHandler: () => void;
};

const StartButton: FC<Props> = ({ clickHandler }) => {
  return (
    <button
      className="startButton"
      data-testid="start-button"
      title="start"
      onClick={clickHandler}
    >
      Start
    </button>
  );
};

export default StartButton;
