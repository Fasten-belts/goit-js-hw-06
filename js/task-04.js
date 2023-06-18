const counterValue = document.querySelector("#value");
let currentValue = 0;

const btnDown = document.querySelector('[data-action="decrement"]');
btnDown.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

const btnUp = document.querySelector('[data-action="increment"]');
btnUp.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
