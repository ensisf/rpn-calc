import { ERROR_MESSAGES } from "constants";

const getErrorMessage = (type) => (...params) => {
  const message = ERROR_MESSAGES[type];
  return typeof message === "function" ? message(...params) : message;
};

export { getErrorMessage };
