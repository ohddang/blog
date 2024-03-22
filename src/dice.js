const dice = document.getElementById("dice");
const inner_dice = document.querySelector(".inner_dice");

const drag_panel = document.getElementById("drag_panel");
const webgl_container = document.getElementById("webgl_container");

const body = document.querySelector("body");
const contents = document.querySelector(".contents");

const drop_down = document.getElementById("drop_down");
const drop_down_area = document.getElementById("drop_down_area");
const projects_area = document.getElementById("projects_area");
const faces = document.querySelectorAll(".face");
const inner_faces = document.querySelectorAll(".inner_face");

const dim_2 = document.getElementById("dim_2");
const dim_3 = document.getElementById("dim_3");

let isDragging = false;
let startMouseX = 0;
let startMouseY = 0;
let currentRotationX = -45;
let currentRotationY = 45;
let currentPositionX = 0;
let currentPositionY = 0;

dice.addEventListener("mousedown", startDrag);
drag_panel.addEventListener("mousedown", startDrag);
document.addEventListener("mouseup", stopDrag);
window.addEventListener("dblclick", onDoubleClick);
dim_2.addEventListener("click", (event) => onClickDimension(event, 2));
dim_3.addEventListener("click", (event) => onClickDimension(event, 3));

function onDoubleClick(event) {
  currentPositionX = event.clientX - dice.getBoundingClientRect().width / 2;
  currentPositionY = event.clientY - dice.getBoundingClientRect().height / 2;
  translateDice(currentPositionX, currentPositionY);
}

function onClickDimension(event, dimension) {
  if (2 === dimension) {
    dim_2.classList.add("select_button");
    dim_3.classList.remove("select_button");

    webgl_container.style.display = "none";
    drag_panel.style.display = "flex";
  } else {
    dim_2.classList.remove("select_button");
    dim_3.classList.add("select_button");

    webgl_container.style.display = "block";
    drag_panel.style.display = "none";
  }
}

function startDrag(event) {
  isDragging = true;
  startMouseX = event.clientX;
  startMouseY = event.clientY;
  document.addEventListener("mousemove", dragDice);
}

function dragDice(event) {
  if (isDragging) {
    const deltaX = event.clientX - startMouseX;
    const deltaY = event.clientY - startMouseY;

    currentRotationX += deltaY * 0.5;
    currentRotationY += deltaX * 0.5;

    currentRotationX %= 360;
    currentRotationY %= 360;

    rotateDice(currentRotationX, currentRotationY);

    startMouseX = event.clientX;
    startMouseY = event.clientY;
  }
}

function stopDrag() {
  if (isDragging) {
    isDragging = false;
    updateStyleColor();
  }
}

function translateDice(newX, newY) {
  currentPositionX = newX;
  currentPositionY = newY;
  updateStyleTransform();
}

function rotateDice(newX, newY) {
  currentRotationX = newX;
  currentRotationY = newY;
  updateStyleTransform();
}

function updateStyleTransform() {
  dice.style.transform = `translateX(${currentPositionX}px) translateY(${currentPositionY}px) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
  inner_dice.style.transform = `rotateX(${currentRotationX + 45}deg) rotateY(${currentRotationY + 45}deg)`;
}

function updateStyleColor() {
  const brightness = 0;
  contents.style.backgroundColor = `rgba(${(currentRotationX % 256) + brightness}, ${
    (currentRotationY % 256) + brightness
  }, ${((currentRotationX + currentRotationY) % 256) + brightness}, 0.6)`;

  faces.forEach((face) => {
    face.style.backgroundColor = `rgba(${(currentRotationX % 256) + brightness}, ${
      (currentRotationY % 256) + brightness
    }, ${((currentRotationX + currentRotationY) % 256) + brightness}, 0.4)`;
  });

  inner_faces.forEach((face) => {
    face.style.backgroundColor = `rgba(${(currentRotationX % 256) + brightness}, ${
      (currentRotationY % 256) + brightness
    }, ${((currentRotationX + currentRotationY) % 256) + brightness}, 0.4)`;
  });
}

// 실행

dim_3.classList.add("select_button");

setInterval(() => {
  currentRotationX += 3;
  currentRotationY += 3;
  currentRotationX %= 360;
  currentRotationY %= 360;

  rotateDice(currentRotationX, currentRotationY);
  updateStyleColor();
}, 500);
