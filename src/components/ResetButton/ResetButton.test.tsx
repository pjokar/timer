import React from "react";
import { render, getByTitle } from "@testing-library/react";
import ResetButton from "./ResetButton";

describe("<ResetButton />", () => {
  it("should render a button:", () => {
    const { getByTestId, getByText } = render(<ResetButton />);
    expect(getByTestId("reset-button")).toBeInTheDocument();
    expect(getByText("Reset")).toBeInTheDocument();
  });
});
