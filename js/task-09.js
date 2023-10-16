const btnChangeColor = document.querySelector('.change-color');
const bBgColorOutput = document.querySelector('.color');
const bodyBackgroundColor = document.querySelector('body');

btnChangeColor.addEventListener("click", handlerBtn);
function handlerBtn() {
  const bodyBgColor = getRandomHexColor();
  
  bodyBackgroundColor.style.backgroundColor = bodyBgColor;
  // document.body.style.backgroundColor = bodyBgColor;
  // btnChangeColor.style.BackgroundColor = bodyBgColor;
  // bBgColorOutput.style.Color = bodyBgColor;
  bBgColorOutput.textContent = bodyBgColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}