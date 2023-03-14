console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", e => {
    e.preventDefault()

    const formData = new FormData (e.target)
    const data = Object.fromEntries (formData)

    console.log(data)

    // Bonus: Calculate and log the age-badness-sum
    console.log(
        `The age-badness-sum of ${e.target.elements.firstName.value} is ${+e.target.elements.age.value + +e.target.elements.badness.value}`
    )
})
