export const SPACE_REGEX = /\s+/;

export const OPERATORS = {
  addition: "+",
  subtraction: "-",
  division: "/",
  multiplication: "*",
};

export const ERROR_MESSAGES = {
  emptyValue: "Inputed value should not be empty.",
  unsupportedOperator: (avaliableOperators, symbol) =>
    `Unsupported operator. Should be one of: ${avaliableOperators}, but got ${symbol}.`,
  insufficientValues: "Wrong or insufficient values in inputed expression.",
  extraSymbols: (extraSymbols) =>
    `You input extra symbol or forgot to add operator. Uncalculated part — ${extraSymbols}.`,
};
