import React from "react";
import { render, screen } from "@testing-library/react";
import DetailPodcast from "./DetailPodcast";

test("renders learn react link", () => {
  render(<DetailPodcast />);
  const linkElement = screen.getByText("DetailPodcast");
  expect(linkElement).toBeInTheDocument();
});
