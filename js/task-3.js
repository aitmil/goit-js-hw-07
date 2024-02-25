const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handleInput);
function handleInput(evt) {
  const valueInput = evt.currentTarget.value.trim();
  if (valueInput === "") {
    nameOutput.textContent;
  } else {
    nameOutput.textContent = valueInput;
  }
}
