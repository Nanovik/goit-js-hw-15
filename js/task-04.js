let counterValue = 0;
const btnPlus = document.querySelector('[data-action="decrement"]');
const btnMinus = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

btnPlus.addEventListener("click", () => {
    counterValue -= 1;
    counter.textContent = `${counterValue}`;
});

btnMinus.addEventListener("click", () => {
    counterValue += 1;
    counter.textContent = `${counterValue}`;
});
