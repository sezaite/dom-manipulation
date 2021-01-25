const container = document.getElementById("container");
const main = document.getElementById("main");
const br = document.createElement("br");
main.setAttribute(
  "style",
  "display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; width: 100%;"
);
container.setAttribute(
  "style",
  "display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: auto; gap: 3px; width: 400px; height: 400px;"
);

//default grid
for (let i = 0; i < 16 * 16; i++) {
  drawPixels();
  hover();
}

const button = document.createElement("button");
button.innerText = "REFRESH";
button.id = "refresh";
button.setAttribute(
  "style",
  'background-color: #4b553a; padding: 10px; width: 120px; height: 40px; color: #efe9db; font-family: "Courier New", Courier, monospace; font-size: 16px;'
);
console.log(button.innerContent);
main.insertBefore(button, container);
main.insertBefore(br, container);

button.addEventListener("click", refresh);
button.addEventListener("mouseenter", buttonTransform);
button.addEventListener("mouseout", transformEnd);

/*
function refresh() {
  container.textContent = "";
  let newSize = parseInt()
    let i;
    do {
        i = prompt(
            "Let's draw a new grid. How many squares would you like to add on each side?"
          );
    } while ( 
        let array = i.split("");
        for (let y = 0; y < array.length - 1; y++){
            if (Number.isInteger(array[s].)){
                return;
            }
        }
    );
}
*/
  const fullSize = newSize * newSize;
  for (let i = 0; i < fullSize; i++) {
    container.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    drawPixels();
    hover();
  }

function drawPixels() {
  let element = document.createElement("div");
  element.className = "e";
  element.setAttribute("style", "background-color: #dba686;");
  container.appendChild(element);
}

function hover() {
  const squares = document.querySelectorAll(".e");
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
