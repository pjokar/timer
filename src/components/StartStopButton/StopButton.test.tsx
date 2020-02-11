import React from "react";
import { render, getByTitle } from "@testing-library/react";
import StopButton from "./StopButton";

describe("<StartButton />", () => {
  it("should render a button:", () => {
    const { getByTestId, getByText } = render(<StopButton />);
    expect(getByTestId("stop-button")).toBeInTheDocument();
    expect(getByText("Stop")).toBeInTheDocument();
  });
});
