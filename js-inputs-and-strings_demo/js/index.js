console.clear();

const form = document.querySelector('[data-js="form"]');
const nameInput = document.querySelector('[data-js="name"]');
const colorInput = document.querySelector('[data-js="color"]');
const hoursInput = document.querySelector('[data-js="hours"]');
const output = document.querySelector('[data-js="output"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const color = colorInput.value;
  const hours = Number.parseInt(hoursInput.value, 10);

  const story = `
    "DON'T TOUCH IT, ${name.toUpperCase()}!",
    I yelled as ${name} was about to touch
    the walls we had painted ${color} not
    ${hours} ${hours === 1 ? "hour" : "hours"} ago.
    I would have expected their memory to
    last at least ${hours + 1} hours.
`;

  output.textContent = story;
});
