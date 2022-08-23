import ErrorHandler from "../ErrorHandler";
import { render, screen } from "@testing-library/react";

describe("ErrorHandler", () => {
  it("If component without error is set as child then the component is render", () => {
    const testLabel = "Test Component";
    const HeaderComponent = () => <h1>{testLabel}</h1>;
    render(
      <ErrorHandler>
        <HeaderComponent />
      </ErrorHandler>
    );

    expect(screen.getByText(testLabel)).toBeTruthy();
  });

  it("If component with an error is set as child then the default message is render", () => {
    const testLabel = "Test Component";
    const errorLabel = "Sorry, something goes wrong.";
    const HeaderComponent = () => {
      throw new Error();
      // eslint-disable-next-line no-unreachable
      return <h1>{testLabel}</h1>;
    };
    render(
      <ErrorHandler>
        <HeaderComponent />
      </ErrorHandler>
    );

    expect(screen.queryByText(testLabel)).toBeFalsy();
    expect(screen.getByText(errorLabel)).toBeTruthy();
  });
});
