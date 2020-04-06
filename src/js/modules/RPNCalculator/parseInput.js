import { SPACE_REGEX } from "constants";
import { getErrorMessage } from "utils";

// Create an array of input symbols, in parallel normalize delimiters
const parseInput = (value) => {
  const isValid = typeof value === "string" && value.length > 0;
  if (!isValid) throw Error(getErrorMessage("emptyValue")());
  return value.trim().replace(/,/g, ".").split(SPACE_REGEX);
};

export { parseInput };
