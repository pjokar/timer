import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";

const setup = () => {
  const utils = render(<App />);
  const display = utils.getByTestId("time");
  const resetButton = utils.getByTestId("reset-button");

  return {
    display,
    resetButton,
    ...utils
  };
};

describe("<App />>", () => {
  it("should display diplay, reset and start by default", () => {
    const { display, resetButton, getByTestId } = setup();

    expect(display).toBeInTheDocument();
    expect(display).toHaveTextContent("00:00:00");
    expect(resetButton).toBeInTheDocument();
    expect(getByTestId("start-button")).toBeInTheDocument();
  });

  it("should change start to stop after clicking on start", async () => {
    const { display, resetButton, getByTestId, queryByTestId } = setup();

    fireEvent.click(getByTestId("start-button"));

    const startButton = await queryByTestId("start-button");
    expect(startButton).toBeNull();
    await wait(() => new Promise(r => setTimeout(r, 1000)));
    expect(display).toHaveTextContent("00:00:01");
    expect(getByTestId("reset-button")).toBeInTheDocument();
  });
});
