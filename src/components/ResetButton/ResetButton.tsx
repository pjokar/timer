import React, { FC } from "react";

type Props = {
  clickHandler: () => void;
};

const ResetButton: FC<Props> = ({ clickHandler }) => {
  return (
    <button data-testid="reset-button" title="reset" onClick={clickHandler}>
      Reset
    </button>
  );
};

export default ResetButton;
