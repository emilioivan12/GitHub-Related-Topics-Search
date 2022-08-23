import { renderHook } from "@testing-library/react-hooks";
import { useDocumentTitle } from "../useDocumentTitle";

describe("useDocumentTitle", () => {

  test("If input is not an empty string then Document.title should be set as `Topic: input`", () => {
    const input = "test";
    const expectedOutput = `Topic: ${input}`;
    renderHook(() => useDocumentTitle(input));
    expect(document.title).toBe(expectedOutput);
  });

  test("If input is an empty string then Document.title should be set as `GitHub Topic App`", () => {
    const input = "";
    const expectedOutput = `GitHub Topic App`;
    renderHook(() => useDocumentTitle(input));
    expect(document.title).toBe(expectedOutput);
  });

});
