const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");

const listIngredientsMarkup = ingredients.map((item) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = item;

  return li;
});

listIngredients.append(...listIngredientsMarkup);
