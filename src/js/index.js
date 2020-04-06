import "css/index.scss";

import { RPNCalculator as calculate } from "modules";

const $ = (s) => document.querySelector(s);

const input = $(".js-input");
const btn = $(".js-button");
const resultBox = $(".js-result");
const errorBox = $(".js-error");

const onErrorCatch = (error) => {
  errorBox.textContent = error.message || "Something went wrong";
};

const onButtonClick = (e) => {
  e.preventDefault();

  try {
    errorBox.textContent = "";
    resultBox.textContent = calculate(input.value);
    input.value = "";
  } catch (error) {
    onErrorCatch(error);
  }
};

btn.addEventListener("click", onButtonClick);
