console.clear();

// SELECTOR-SECTION: Pizza, Input-Filed, Output-Section

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');

const outputSection = document.querySelector('[data-js="output-section"]');
const output = document.querySelector('[data-js="output"]');


// EVENT-LISTENER @ Input-Field:
// Feeds Functions calaculatePizzaGain & updatePizzaDisplay
// Refers to Selector-Section

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
});



// FUNCTIONS


// Calculate gain in Pizza (params from eventlisteners)
// Output to text-output + updateOutputColor function

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = 2 * Math.PI * diameter1;
  const area2 = 2 * Math.PI * diameter2;
  const pizzaGain = (area2 - area1) / area1 * 100

  output.textContent = Math.round(pizzaGain)
  updateOutputColor(pizzaGain);
 }


 // Change pizza dipslay sizes (params from eventlisteners + selector-section)
 
 function updatePizzaDisplay(pizzaElement, newSize) {
   pizzaElement.style.width = `${(newSize / 24) * 100}px`
 }


// Change the Output Background (params from calculatePizzaGain-Function)

function updateOutputColor(pizzaGain) {
  if (pizzaGain < 0) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
