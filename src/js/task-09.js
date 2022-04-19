const btnChangeColor = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
const body = document.querySelector("body");

btnChangeColor.addEventListener("click", onChangeBgColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeBgColor(event) {
  const color = getRandomHexColor();
  nameColor.textContent = color;
  body.style.backgroundColor = color;
}
