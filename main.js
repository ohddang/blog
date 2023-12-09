const dice = document.getElementById("dice");
const face = document.getElementById("face");
const drag_panel = document.getElementById("drag_panel");

const face1 = document.getElementById("face1");
const face2 = document.getElementById("face2");
const face3 = document.getElementById("face3");
const face4 = document.getElementById("face4");

let isDragging = false;
let startMouseX = 0;
let startMouseY = 0;
let currentRotationX = -45;
let currentRotationY = 45;

dice.addEventListener("mousedown", startDrag);
drag_panel.addEventListener("mousedown", startDrag);
document.addEventListener("mouseup", stopDrag);

dice.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;

function startDrag(event) {
  isDragging = true;
  startMouseX = event.clientX;
  startMouseY = event.clientY;
}

function dragDice(event) {
  if (isDragging) {
    const deltaX = event.clientX - startMouseX;
    const deltaY = event.clientY - startMouseY;

    currentRotationX += deltaY * 0.5;
    currentRotationY += deltaX * 0.5;

    currentRotationX %= 360;
    currentRotationY %= 360;

    dice.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;

    updateScreen();

    startMouseX = event.clientX;
    startMouseY = event.clientY;
    document.addEventListener("mousemove", dragDice);
  }
}

function stopDrag() {
  if(isDragging){
    isDragging = false;
    document.addEventListener("mousemove", dragDice);
  }
}

function updateScreen() {
  dice.getBoundingClientRect();
}

function onClickLink(value){
  function handleTransitionEnd(){
    window.location = value;
    dice.removeEventListener('transitionend', handleTransitionEnd);
  }

  dice.addEventListener('transitionend', handleTransitionEnd);

  onClickFace(value);
}