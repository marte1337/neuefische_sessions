const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
    const age = Number(input.value);

    age < 18 ? output.innerHTML="<h4><style>h4{color:red;font-size:60px;}</style> You are a teen!</h4>" : output.innerText="You are not a teen."

    // if (age < 18) {
    //     output.innerText="You are a teen."
    // } else {
    //     output.innerText="You are not a teen."
    // }
});