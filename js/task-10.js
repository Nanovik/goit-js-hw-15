const formInput = document.querySelector('#controls');
const createDiv = document.querySelector('#boxes');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

formInput.addEventListener("input", handlerInputNum);
btnCreate.addEventListener("click", handlerCreateDiv);
btnDestroy.addEventListener("click", handlerDestroyDiv);

let num = 0;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
const setList = [];
for (let i = 0; i < amount; i++) {
  setList[i] = `<div style = "background-color: ${getRandomHexColor()}; width: ${30 + 10 * i}px; height: ${30 + 10 * i}px"></div>`;
}
  createDiv.innerHTML =setList.join("");
}

function handlerInputNum (evt) {
  num = Number(evt.target.value);
};

function handlerCreateDiv (evt) {
  createBoxes(num);
};

function handlerDestroyDiv (evt) {
  createDiv.innerHTML = "";
};