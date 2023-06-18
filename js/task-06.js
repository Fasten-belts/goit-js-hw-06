const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  input.classList.add("invalid");

  if (input.value.length === Number(input.getAttribute("data-length"))) {
    input.classList.replace("invalid", "valid");
  }
}
