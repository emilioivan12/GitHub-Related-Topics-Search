import Search from "../Search";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Card", () => {
  it("If input text change then onChange function should be called", () => {
    const onChange = jest.fn();
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(<Search handleSubmit={handleSubmit} value="" onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "test",
      },
    });

    expect(onChange.mock.calls.length).toBe(1);
  });

  it("If submit button trigger then handleSubmit function should be called", () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(
      <Search handleSubmit={handleSubmit} value="" onChange={() => undefined} />
    );
    fireEvent.click(screen.getByRole("button"));

    expect(handleSubmit.mock.calls.length).toBe(1);
  });

  it("If value is provided then value is displayed on the scren", () => {
    const valueInput = "valueInput";
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(
      <Search
        handleSubmit={handleSubmit}
        value={valueInput}
        onChange={() => undefined}
      />
    );
    const htmlInput = screen.getByRole("textbox") as HTMLInputElement;

    expect(htmlInput.value).toBe(valueInput);
  });
});
