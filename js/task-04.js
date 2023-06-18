const counterValue = document.querySelector("#value");
let currentValue = 0;

const buttonDown = document.querySelector('[data-action="decrement"]');
buttonDown.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

const buttonUp = document.querySelector('[data-action="increment"]');
buttonUp.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
