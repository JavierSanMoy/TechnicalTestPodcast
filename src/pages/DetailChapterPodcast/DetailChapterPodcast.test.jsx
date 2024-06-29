import React from "react";
import { render, screen } from "@testing-library/react";
import DetailChapterPodcast from "./DetailChapterPodcast";

test("renders learn react link", () => {
  render(<DetailChapterPodcast />);
  const linkElement = screen.getByText("DetailChapterPodcast");
  expect(linkElement).toBeInTheDocument();
});
