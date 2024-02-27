// const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", handleClick);

function handleClick() {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
    input.value = "";
  } else {
    alert("Please enter a number from 1 to 100!");
    input.value = "";
  }
}

function createBoxes(amount) {
  boxes.innerHTML = "";
  let boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyBtn.addEventListener("click", onClick);

function onClick() {
  destroyBoxes();
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
