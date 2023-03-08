console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const btnDark = document.querySelector("[data-js='dark-mode-button']")
const btnLight = document.querySelector('[data-js="light-mode-button"]')
const btnToggle = document.querySelector('[data-js="toggle-button"]')

btnDark.addEventListener("click", () => {
   bodyElement.classList.add("dark")
})

btnLight.addEventListener("click", () => {
    bodyElement.classList.remove("dark")
})

btnToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("dark")
})