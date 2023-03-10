console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value
  const pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value
  const pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {

 const area1 = 2 * Math.PI * diameter1;
 const area2 = 2 * Math.PI * diameter2;

 const pizzaGain = (area2 - area1) / area1 * 100

output.textContent = Math.round(pizzaGain)
 

}


// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
}
