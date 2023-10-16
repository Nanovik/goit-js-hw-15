const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

function createList(arr) {
  const setList = arr.map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    // console.log(li);
    return li;
  });

  list.append(...setList);
}

createList(ingredients);

// const setList = ingredients.map((ingredient) =>
//   `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(setList);
// list.innerHTML = setList;