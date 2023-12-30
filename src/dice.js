// const dice = document.getElementById("dice");
// const drag_panel = document.getElementById("drag_panel");

// const body = document.querySelector("body");
// const contents = document.querySelector(".contents");

// let isDragging = false;
// let startMouseX = 0;
// let startMouseY = 0;
// let currentRotationX = -45;
// let currentRotationY = 45;
// let currentPositionX = 0;
// let currentPositionY = 0;

// dice.addEventListener("mousedown", startDrag);
// drag_panel.addEventListener("mousedown", startDrag);
// document.addEventListener("mouseup", stopDrag);
// window.addEventListener("resize", onResizeBrowser);

// function onResizeBrowser(event) {
//   body.style.height = `${window.outerHeight}px`;
// }

// setRandomPositionDice();

// function startDrag(event) {
//   isDragging = true;
//   startMouseX = event.clientX;
//   startMouseY = event.clientY;
//   document.addEventListener("mousemove", dragDice);
// }

// function dragDice(event) {
//   if (isDragging) {
//     const deltaX = event.clientX - startMouseX;
//     const deltaY = event.clientY - startMouseY;

//     currentRotationX += deltaY * 0.5;
//     currentRotationY += deltaX * 0.5;

//     currentRotationX %= 360;
//     currentRotationY %= 360;

//     rotateDice(currentRotationX, currentRotationY);

//     updateScreen();

//     startMouseX = event.clientX;
//     startMouseY = event.clientY;
//   }
// }

// function stopDrag() {
//   if (isDragging) {
//     isDragging = false;
//     contents.style.backgroundColor = `rgba(${currentRotationX % 256}, ${
//       currentRotationY % 256
//     }, ${(currentRotationX + currentRotationY) % 256}, 0.2)`;
//   }
// }

// function updateScreen() {
//   dice.getBoundingClientRect();
// }

// export function setRandomPositionDice() {
//   const area_x = dice.parentElement.offsetWidth * 0.6;
//   const area_y = dice.parentElement.offsetHeight * 0.6;

//   const new_x =
//     Math.floor(Math.random() * area_x) + dice.parentElement.offsetWidth * 0.2;
//   const new_y =
//     Math.floor(Math.random() * area_y) + dice.parentElement.offsetHeight * 0.1;
//   dice.style.transform = `translateX(${new_x}px) translateY(${new_y}px)`;
//   translateDice(new_x, new_y);
// }

// setInterval(() => {
//   currentRotationX += 3;
//   currentRotationY += 3;
//   currentRotationX %= 360;
//   currentRotationY %= 360;

//   rotateDice(currentRotationX, currentRotationY);

//   contents.style.backgroundColor = `rgba(${currentRotationX % 256}, ${
//     currentRotationY % 256
//   }, ${(currentRotationX + currentRotationY) % 256}, 0.2)`;
// }, 500);

// function translateDice(newX, newY) {
//   currentPositionX = newX;
//   currentPositionY = newY;
//   dice.style.transform = `translateX(${currentPositionX}px) translateY(${currentPositionY}px) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
// }

// function rotateDice(newX, newY) {
//   currentRotationX = newX;
//   currentRotationY = newY;
//   dice.style.transform = `translateX(${currentPositionX}px) translateY(${currentPositionY}px) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
// }
