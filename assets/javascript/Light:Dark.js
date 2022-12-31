const lightdarkCheckbox = document.getElementById("light-dark-checkbox")
lightdarkCheckbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})