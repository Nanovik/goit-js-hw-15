const textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", handlerBlur);

function handlerBlur (evt) {
    const textLength = evt.currentTarget.value.length;
    if (textLength === Number(evt.currentTarget.getAttribute('data-length'))) {
        evt.currentTarget.classList.add("valid");
    } else {
        evt.currentTarget.classList.add("invalid");
    };
};

textInput.addEventListener("focus", () => {
    textInput.value = "";
    textInput.setAttribute('class', '');
});