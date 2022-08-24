import { render, screen } from "@testing-library/react";
import App from "../views/app/App";

test("renders App", () => {
  render(<App />);
  const linkElement = screen.getByText(/KPEDETIN/i);
  expect(linkElement).toBeInTheDocument();
});
