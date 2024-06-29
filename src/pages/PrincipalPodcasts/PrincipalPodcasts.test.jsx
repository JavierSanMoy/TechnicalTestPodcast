import React from "react";
import { render, screen } from "@testing-library/react";
import PrincipalPodcasts from "./PrincipalPodcasts";

test("renders learn react link", () => {
  render(<PrincipalPodcasts />);
  const linkElement = screen.getByText("PrincipalPodcasts");
  expect(linkElement).toBeInTheDocument();
});
