import { parseInput } from "modules/RPNCalculator/parseInput";
import { calculate } from "modules/RPNCalculator/calculate";
import { RPNCalculator } from "modules/RPNCalculator";

describe("RPN parseInput func", () => {
  const VALUE = "5 4 +";

  test("Input value should be defined", () => {
    expect(parseInput(VALUE)).toBeDefined();
  });

  test("Input value should be string", () => {
    expect(typeof VALUE === "string").toBe(true);
  });

  test("parseInput returns an Array", () => {
    expect(Array.isArray(parseInput(VALUE))).toBe(true);
  });
});

describe("RPN calculate func", () => {
  const ACCEPTED_OPERATOR = "+";
  const NOT_ACCEPTED_OPERATOR = "%";
  const A = 5;
  const B = 5;

  test("Operator is invalid & calculation is correct", () => {
    expect(calculate(ACCEPTED_OPERATOR, A, B)).toBe(10);
  });

  test("Operator is invalid", () => {
    expect(() => calculate(NOT_ACCEPTED_OPERATOR, A, B)).toThrow(Error);
  });
});

describe("RPN calculator", () => {
  const CORRECT_INPUT = "10000 25 2 776 / * + 200 +";
  const WRONG_INPUT = "10000 25 2 776 / * + 200 +8";

  test("Calculation is correct", () => {
    expect(RPNCalculator(CORRECT_INPUT)).toBe(1776);
  });

  test("Calculation throw an error", () => {
    expect(() => RPNCalculator(WRONG_INPUT)).toThrow(Error);
  });
});
