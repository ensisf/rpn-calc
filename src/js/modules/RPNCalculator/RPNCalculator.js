import { isNumeric, getErrorMessage } from "utils";
import { compose } from "ramda";
import { parseInput } from "./parseInput";
import { calculate } from "./calculate";

const reducer = (acc, currentSymbol) => {
  if (isNumeric(currentSymbol)) return [...acc, Number(currentSymbol)];

  // If the entered values are not enough to calculate throw error
  if (acc.length < 2) throw Error(getErrorMessage("insufficientValues")());

  const [a, b, ...rest] = acc;

  const calculatedValue = calculate(currentSymbol, a, b);

  return [calculatedValue, ...rest];
};

const getResult = (symbols) => {
  if (!Array.isArray(symbols)) throw new Error();

  const result = symbols.reduce(reducer, []);

  // If the entered values have extra symbols throw error
  if (result.length > 1) {
    const extraSymbols = result.slice(1).join(", ").trim();
    throw new Error(getErrorMessage("extraSymbols")(extraSymbols));
  }

  return result.pop();
};

const RPNCalculator = compose(getResult, parseInput);

export { RPNCalculator };
