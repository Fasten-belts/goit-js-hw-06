const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const isFormValid = email.value && password.value;
  isFormValid
    ? console.log({ email: email.value, password: password.value })
    : alert("Будь ласка, заповніть всі поля");

  event.currentTarget.reset();
}
