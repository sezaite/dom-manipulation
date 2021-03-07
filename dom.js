const container = document.getElementById("container");
const main = document.getElementById("main");
const br = document.createElement("br");
main.setAttribute(
  "style",
  "display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; width: 100%;"
);
container.setAttribute(
  "style",
  "display: grid; grid-template-rows: auto; gap: 3px; width: 400px; height: 400px;"
);

const button = document.createElement("button");
button.innerText = "REFRESH";
button.id = "refresh";
button.setAttribute(
  "style",
  'background-color: #4b553a; padding: 10px; width: 120px; height: 40px; color: #efe9db; font-family: "Courier New", Courier, monospace; font-size: 16px;'
);
main.insertBefore(button, container);
main.insertBefore(br, container);

button.addEventListener("click", refresh);
button.addEventListener("mouseenter", buttonTransform);
button.addEventListener("mouseout", transformEnd);

drawAGrid(16);

function drawAGrid(lengthOfSquare) {
  container.style.gridTemplateColumns = `repeat(${lengthOfSquare}, 1fr)`;
  for (let i = 0; i < lengthOfSquare * lengthOfSquare; i++) {
    drawPixels();
    hover();
  }
}

function refresh() {
  container.innerHTML = "";
  let newLength;
  do {
    newLength = prompt(
      "Let's draw a new grid. How many squares would you like to add on each side? Don't write more than 40 if you don't want to wait :)"
    );
  } while (!isInteger(newLength));
  drawAGrid(newLength);
}

function isInteger(number) {
  return (Number.isInteger(number) || number > 0 || number < 60)
}

function drawPixels() {
  let element = document.createElement("div");
  element.className = "square";
  element.setAttribute("style", "background-color: #dba686;");
  container.appendChild(element);
}

function hover() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      square.setAttribute("style", "background-color: #efe9db ");
    });
  });
}

function buttonTransform() {
  button.style.transform = "scale(1.1)";
  button.style.cursor = "pointer";
  button.style.transition = "0.3s";
}

function transformEnd() {
  button.style.transform = "";
}
