import React from "react";
import {
  render,
  fireEvent,
  wait,
  waitForElement,
  waitForElementToBeRemoved
} from "@testing-library/react";
import App from "./App";

const setup = () => {
  const utils = render(<App />);
  const display = utils.getByTestId("time");

  return {
    display,
    ...utils
  };
};

describe("<App />>", () => {
  it("should display diplay, reset and start by default", () => {
    const { display, getByTestId } = setup();

    expect(display).toBeInTheDocument();
    expect(display).toHaveTextContent("00:00:00");
    expect(getByTestId("reset-button")).toBeInTheDocument();
    expect(getByTestId("start-button")).toBeInTheDocument();
  });

  it("should change start to stop after clicking on start", async () => {
    const { display, getByTestId } = setup();

    const startButton = getByTestId("start-button");
    fireEvent.click(startButton);

    waitForElementToBeRemoved(() => startButton);

    const stopButton = await waitForElement(() => getByTestId("stop-button"));
    expect(stopButton).toBeInTheDocument();

    await wait(() => new Promise(r => setTimeout(r, 1000)));
    expect(display).toHaveTextContent("00:00:01");

    expect(getByTestId("reset-button")).toBeInTheDocument();
  });

  it("should stop and reset display to 00:00:00", async () => {
    const { display, getByTestId } = setup();

    const startButton = getByTestId("start-button");
    fireEvent.click(startButton);

    await wait(() => new Promise(r => setTimeout(r, 1000)));
    expect(display).toHaveTextContent("00:00:01");

    const stopButton = getByTestId("stop-button");
    waitForElementToBeRemoved(() => startButton);

    const resetButton = getByTestId("reset-button");
    fireEvent.click(resetButton);

    waitForElementToBeRemoved(() => stopButton);

    expect(display).toHaveTextContent("00:00:00");
    expect(getByTestId("reset-button")).toBeInTheDocument();
    expect(getByTestId("start-button")).toBeInTheDocument();
  });
});
