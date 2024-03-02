function handleUserInput() {
    const operation = prompt("Matematik amallarni kiriting. Misol uchun (+, -, *): ");
    const num1 = parseFloat(prompt("Birinchi sonni kiriting: "));
    const num2 = parseFloat(prompt("Ikkinchi sonni kiriting: "));
  
    switch (operation) {
      case "+":
        console.log(`Natija: ${num1} + ${num2} = ${num1 + num2}`);
        break;
      case "-":
        console.log(`Natija: ${num1} - ${num2} = ${num1 - num2}`);
        break;
      case "*":
        console.log(`Natija: ${num1} * ${num2} = ${num1 * num2}`);
        break;
    }
  } 
  handleUserInput();