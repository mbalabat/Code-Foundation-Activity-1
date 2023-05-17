function basicmath(expression) {
    const parts = expression.split(" ");
    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[2]);
    const operator = parts[1];
    let result;
  
    if (operator === "plus") {
      result = num1 + num2;
    } else if (operator === "minus") {
      result = num1 - num2;
    } else if (operator === "times") {
      result = num1 * num2;
    } else if (operator === "divided by") {
      result = num1 / num2;
    }
  
    return result;
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Enter a mathematical expression in words: ", (expression) => {
    const result = basicmath(expression);
    console.log(`Result: ${result}`);
    rl.close();
  });
  