import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Links from "../components/Link";

test("renders the h3 with the text 'Links'", () => {
  render(<Links />);
  expect(screen.queryByText("Links")).toBeInTheDocument();
});

test("displays the URL of a Github link passed down as a prop", () => {
  render(<Links github={"https://github.com/Griffin798"} />);
  expect(screen.queryByText("https://github.com/Griffin798")).toBeInTheDocument();
});

test("displays the URL of a Linkedin link passed down as a prop", () => {
  render(<Links linkedin={"https://www.linkedin.com/in/griffin-muuo-3497382b7/"} />);
  expect(
    screen.queryByText("https://www.linkedin.com/in/griffin-muuo-3497382b7/")
  ).toBeInTheDocument();
});
