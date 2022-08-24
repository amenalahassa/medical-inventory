import React from "react";
import { render, findByText } from "@testing-library/react";
import App from "../../views/app/App";

test("renders App", async () => {
  const { baseElement } = render(<App />);
  expect(await findByText(baseElement, "KPEDETIN")).toBeVisible();
});
