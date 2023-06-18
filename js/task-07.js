const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
console.log(span);

input.addEventListener("input", onResizeText);

function onResizeText(event) {
  span.style.fontSize = `${event.target.value}px`;
}
