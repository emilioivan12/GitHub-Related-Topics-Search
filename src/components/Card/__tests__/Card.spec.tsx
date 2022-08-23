import Card from "../Card";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Card", () => {
  it("If title provided then the title is render", () => {
    const titleInput = "titleInput";
    render(<Card title={titleInput} subtitle="" primary={false} />);
    const isTitleDisplayed = screen.getByText(titleInput);

    expect(isTitleDisplayed).toBeTruthy();
  });

  it("If subtitle provided then the subtitle is render", () => {
    const subtitleInput = "subtitleInput";
    render(<Card title="" subtitle={subtitleInput} primary={false} />);
    const isSubtitleDisplayed = screen.getByText(subtitleInput);

    expect(isSubtitleDisplayed).toBeTruthy();
  });

  it("If onClick provided and click is fired then onClick is called", () => {
    const titleInput = "titleInput";
    const onClick = jest.fn();
    render(
      <Card title={titleInput} subtitle="" primary={false} onClick={onClick} />
    );
    fireEvent.click(screen.getByText(titleInput));

    expect(onClick.mock.calls.length).toBe(1);
  });

});
