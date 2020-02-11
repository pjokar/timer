import React from "react";
import { render, getByTitle, getByTestId } from "@testing-library/react";
import StartStopButton from "./StartStopButton";

describe("<StartStopButton />", () => {
  it("should show start button by default :", async () => {
    const { getByTestId, queryByTestId } = render(
      <StartStopButton hasStarted={false} />
    );
    const stopButton = await queryByTestId("stop-button");
    expect(stopButton).toBeNull();
    expect(getByTestId("start-button")).toBeInTheDocument();
  });
  it("should show stop button if timer is running :", async () => {
    const { getByTestId, queryByTestId } = render(
      <StartStopButton hasStarted={true} />
    );
    const startButton = await queryByTestId("start-button");
    expect(startButton).toBeNull();
    expect(getByTestId("stop-button")).toBeInTheDocument();
  });
});
