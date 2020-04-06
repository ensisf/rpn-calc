import { OPERATORS } from "constants";
import { getErrorMessage } from "utils";

// Make calculation. If the operation is unsupported yet, throw an error
const calculate = (symbol, a, b) => {
  switch (symbol) {
    case OPERATORS.addition:
      return a + b;

    case OPERATORS.subtraction:
      return a - b;

    case OPERATORS.division:
      return a / b;

    case OPERATORS.multiplication:
      return a * b;

    default:
      const avaliableOperators = Object.values(OPERATORS).join(", ").trim();
      throw Error(
        getErrorMessage("unsupportedOperator")(avaliableOperators, symbol)
      );
  }
};

export { calculate };
