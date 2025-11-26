export function calcExpression(expr) {
  const output = [];
  const operators = [];
  const priority = { "+": 1, "-": 1, "*": 2, "/": 2 };

  const symbols = expr.match(/(?<!\d)-?\d+(\.\d+)?|[+\-*/]/g);

  for (let symbol of symbols) {
    if (!isNaN(symbol)) {
      output.push(symbol);
    } else if (symbol in priority) {
      while (
        operators.length &&
        priority[operators[operators.length - 1]] >= priority[symbol]
      ) {
        output.push(operators.pop());
      }
      operators.push(symbol);
    }
  }

  while (operators.length) {
    output.push(operators.pop());
  }

  const stack = [];
  for (let symbol of output) {
    if (!isNaN(symbol)) {
      stack.push(Number(symbol));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (symbol) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
      }
    }
  }

  return stack[0];
}
