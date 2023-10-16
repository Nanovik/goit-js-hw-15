const sizeControl = document.querySelector('#font-size-control');
const sizeText = document.querySelector('#text');

sizeText.style.fontSize = `${sizeControl.value}px`;

sizeControl.addEventListener("input", handlerRange);

function handlerRange (evt) {
    const fontSize = evt.currentTarget.value;
    sizeText.style.fontSize = `${fontSize}px`;
    // sizeText.style.fontSize = evt.currentTarget.value + `px`;
};