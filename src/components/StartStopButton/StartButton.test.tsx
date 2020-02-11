import React from "react";
import { render, getByTitle } from "@testing-library/react";
import StartButton from "./StartButton";

describe("<StartButton />", () => {
  it("should render a button:", () => {
    const { getByTestId, getByText } = render(<StartButton />);
    expect(getByTestId("start-button")).toBeInTheDocument();
    expect(getByText("Start")).toBeInTheDocument();
  });
});
