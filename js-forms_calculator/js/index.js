console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

// const numberA = event.target.elements.numberA.value
// const numberB = event.target.elements.numberB.value
// const operator = event.target.elements.operator.value

// if (operator == "addition") {
//   result = add(+numberA, +numberB)
// } else if (operator == "subtraction") {
//   result = subtract(+numberA, +numberB)
// } else if (operator == "multiplication") {
//   result = multiply(+numberA, +numberB)
// } else {
//   result = divide(+numberA, +numberB)
// }


// result = (operator, numberA, numberB) => {
//   return add(+numberA, +numberB)
//   ? (operator === "addition")
//   : subtract(+numberA, +numberB)
//   ? (operator === "subtraction")
//   : multiply(+numberA, +numberB)
//   ? (operator === "multiplication")
//   : divide(+numberA, +numberB)
//   }
// }


const formData = new FormData(event.target);
const data = Object.fromEntries(formData);

if (data.operator === "addition") {
  result = add(+data.numberA, +data.numberB);
} else if (data.operator === "subtraction") {
  result = subtract(+data.numberA, +data.numberB);
} else if (data.operator === "multiplication") {
  result = multiply(+data.numberA, +data.numberB);
} else if (data.operator === "division") {
  result = divide(+data.numberA, +data.numberB);
}


// const numA = +data.numberA;
// const numB = +data.numberB;

// switch (data.operator) {
//   case "addition":
//     result = add(numA, numB);
//     break;
//   case "subtraction":
//     result = subtract(numA, numB);
//     break;
//   case "multiplication":
//     result = multiply(numA, numB);
//     break;
//   case "division":
//     result = divide(numA, numB);
//     break;
//   default:
//     break;
// }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
