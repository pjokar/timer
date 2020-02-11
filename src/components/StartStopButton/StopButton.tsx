import React, { FC } from "react";

import "./Button.css";

type Props = {
  clickHandler: () => void;
};

const StopButton: FC<Props> = ({ clickHandler }) => {
  return (
    <button
      className="stopButton"
      data-testid="stop-button"
      title="stop"
      onClick={clickHandler}
    >
      Stop
    </button>
  );
};

export default StopButton;
