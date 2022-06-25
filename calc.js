function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function modulus(a, b){
    return a % b;
}
function Calculate(){
    var a = parseInt(prompt("Please enter a number"));
    var b = parseInt(prompt("Please enter another number"));
    var operator = prompt("Choose operator from the list +, -, *, /, %");
    var result;
    switch (operator) {
      case "+":
        result = add(a, b);
        break;
      case "-":
        result = subtract(a, b);
        break;
      case "*":
        result = multiply(a, b);
        break;
      case "/":
        result = divide(a, b);
        break;
      case "%":
        result = modulus(a, b);
        break;
      default:
        alert("Invalid operator");
        break;
    }
alert("The answer is" + " " + result);
alert("Thank you for participating");
}
Calculate();
