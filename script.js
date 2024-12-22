const validator = new JustValidate("#newsletter-form", {
    errorFieldCssClass: 'error',
});
const success = document.querySelector(".success");
const newsletterForm = document.querySelector(".newsletter");
const resetButton = document.querySelector(".reset");

validator
    .addField("#email", [
        {
            rule: "required",
            errorMessage: "Email cannot be empty",
        },
        {
            rule: "email",
            errorMessage: "Valid email is required",
        },
    ])

    .onSuccess(() => {
        success.classList.remove("hidden");
        newsletterForm.classList.add("hidden");
    });

resetButton.addEventListener("click", resetForm);

function resetForm() {
    success.classList.add("hidden");
    newsletterForm.classList.remove("hidden");
}