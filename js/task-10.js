function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;
  let boxSize = 30;
  let boxesMarkup = "";

  for (let i = 0; i <= amount; i += 1) {
    const box = `
      <div 
        style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"
      ></div>
    `;
    boxesMarkup += box;
    boxSize += 10;
  }

  boxesContainer.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
