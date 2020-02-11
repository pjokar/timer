import React, { FC } from "react";
import { Modes } from "../../types";

type Props = {
  time: string;
};

const Display: FC<Props> = ({ time }) => {
  return <h1 data-testid="time">{time}</h1>;
};

export default Display;
