const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");
ingredients.map(function (item) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = item;
  listIngredients.appendChild(li);
});
