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
let currentRotationX = 0;
let currentRotationY = 0;

dice.addEventListener("mousedown", startDrag);
drag_panel.addEventListener("mousedown", startDrag);
document.addEventListener("mouseup", stopDrag);

// A : x->-90 y->-180 red
// B : x->0   y->-90 orange
// C : x->180 y->0 yellow
// D : x->0   y->90 green
// E : x->90  y->0 blue
// F : x->0   y->0 purple
let menuArray = [[-90, -180, "red"], [0, -90, "orange"], [180, 0, "yellow"],
                [0, 90, "green"], [90, 0, "blue"], [0, 0, "purple"]];

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

// A : x->-90 y->-180 red
// B : x->0   y->-90 orange
// C : x->180 y->0 yellow
// D : x->0   y->90 green
// E : x->90  y->0 blue
// F : x->0   y->0 purple
function onClickA(value) {
  console.log(`Click ${value}`);
  let x=0;
  let y=0;
  switch(value){
    case 'A':
      x = -90; y = -180; color="red";
      break;
    case 'B':
      x = 0; y = -90; color="orange";
      break;
    case 'C':
      x = 180; y = 0; color="yellow";
      break;
    case 'D':
      x = 0; y = 90; color="green";
      break;
    case 'E':
      x = 90; y = 0; color="blue";
      break;
    case 'F':
      x = 0; y = 0; color="purple";
      break;
  }
  currentRotationX = x;
  currentRotationY = y;
  dice.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  drag_panel.style.backgroundColor = color;
}

function onClickLink(value){
  console.log(value);

  function handleTransitionEnd(){
    window.location = value;
    // console.log("transitionEnd");
    dice.removeEventListener('transitionend', handleTransitionEnd);
  }

  dice.addEventListener('transitionend', handleTransitionEnd);

  onClickA('D');
}