import { sanitizeString } from "../stringUtils";

describe("string utils", () => {
  
  describe("sanitizeString", ()=>{

    test("If the input is a string with an empty spaces at the middle then it returns a dash instead of an space", () => {
      const inputString="react query";
      const expectedOutput="react-query";
      expect(sanitizeString(inputString)).toBe(expectedOutput);
    });

    test("If the input has empty spaces at the beggining then it returns the same string without the spaces at the beggining", () => {
      const inputString="                react";
      const expectedOutput="react";
      expect(sanitizeString(inputString)).toBe(expectedOutput);
    });

    test("If the input has empty spaces at the end then it returns the same string without the spaces at the end", () => {
      const inputString="react                   ";
      const expectedOutput="react";
      expect(sanitizeString(inputString)).toBe(expectedOutput);
    });

    test("Always returns a lower case string", () => {
      const inputString="rEaCt";
      const expectedOutput="react";
      expect(sanitizeString(inputString)).toBe(expectedOutput);
    });

    test("If the input is an empty string then it returns the same string", () => {
      const inputString="";
      const expectedOutput="";
      expect(sanitizeString(inputString)).toBe(expectedOutput);
    });

  })
});
