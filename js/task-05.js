const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", handlerInputName);

function handlerInputName(event) {
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
};

nameInput.addEventListener("blur", () => {
  nameInput.value = "";
  nameOutput.textContent = "Anonymous";
});
