const input = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

input.addEventListener("input", onInputPrint);

function onInputPrint(event) {
  span.textContent = event.target.value.trim() || "Anonymous";
}
