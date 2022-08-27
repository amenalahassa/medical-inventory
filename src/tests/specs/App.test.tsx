import React from "react";
import { render, findByText } from "@testing-library/react";
import AppCore from "../../views/App/AppCore";

test("renders App", async () => {
  const { baseElement } = render(<AppCore />);
  expect(await findByText(baseElement, "KPEDETIN")).toBeVisible();
});
