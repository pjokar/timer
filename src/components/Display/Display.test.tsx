import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

describe("<Display />", () => {
  it("should display given time:", () => {
    const time = "00:05:59";
    const { getByTestId } = render(<Display time={time} />);
    expect(getByTestId("time")).toBeTruthy();
    expect(getByTestId("time")).toHaveTextContent(time);
  });
});
