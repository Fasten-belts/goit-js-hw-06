const lists = document.querySelectorAll(".item");
console.log(`Number of categories: ${lists.length}`);

lists.forEach((list) => {
  console.log(`Category: ${list.firstElementChild.textContent}`);
  console.log(`Elements: ${list.lastElementChild.children.length}`);
});
