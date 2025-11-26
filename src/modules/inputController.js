import { calcExpression } from "./calcExpression.js";

let input = "";
let prevInput = "";

export function handleClick(button, display, prevDisplay) {
  if (!isNaN(button) || button === ".") {
    input += button;
  } else if (["+", "-", "x", "/"].includes(button)) {
    if (button === "x") button = "*";
    input += ` ${button} `;
  } else if (button === "=") {
    prevInput = input;
    prevDisplay.textContent = prevInput + " =";
    const result = calcExpression(input);
    display.textContent = result;
    input = result.toString();
    return;
  } else if (button === "+/-") {
    const parts = input.trim().split(/\s+/);
    const last = parts.pop();
    if (!isNaN(last)) {
      parts.push((-parseFloat(last)).toString());
      input = parts.join(" ");
    }
  } else if (button === "%") {
    const parts = input.trim().split(/\s+/);
    const last = parts.pop();
    if (!isNaN(last)) {
      parts.push((parseFloat(last) / 100).toString());
      input = parts.join(" ");
    }
  } else if (button === "AC") {
    input = "";
    prevDisplay.textContent = "";
  }

  display.textContent = input || "0";
}
