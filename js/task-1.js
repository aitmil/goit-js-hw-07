const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((item) => {
  const firstChild = item.firstElementChild.textContent;
  const lastChild = item.lastElementChild.children.length;
  console.log(`Category: ${firstChild}`);
  console.log(`Elements: ${lastChild}`);
});

// const titles = document.querySelectorAll("h2");
// titles.forEach((title) => {
//   console.log(`Category: ${title.textContent}`);

//   const itemsCategory = title.parentElement.querySelectorAll("ul>li");
//   console.log(`Elements: ${itemsCategory.length}`);
// });
