import "./styles/calculator.css";
import "./styles/theme.css";
import "./styles/index.css";

import { handleClick } from "./modules/inputController.js";

const display = document.querySelector(".display-text");
const prevDisplay = document.querySelector(".prev-display-text");
const buttons = document.querySelectorAll(".button");

const toggleThemeBtn = document.querySelector(".toggle-theme");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleClick(button.textContent, display, prevDisplay);
  });
});

toggleThemeBtn.addEventListener("click", () => {
  document.documentElement.dataset.theme =
    document.documentElement.dataset.theme === "light" ? "dark" : "light";
});
