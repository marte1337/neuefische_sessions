console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
  success.setAttribute("hidden", "");
}
hideTosError();

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  // const formData = new FormData(event.target);
  // const data = Object.fromEntries(formData);
  // console.log(data);

  const tosData = event.target.elements.tos.checked;
  console.log(tosData);

  if (tosData === !true) {
    return showTosError();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  else alert("Form submitted");
  success.removeAttribute("hidden");
});