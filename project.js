const project_list = document.querySelector(".project_list");

const dice = document.getElementById("dice");
const drag_panel = document.getElementById("drag_panel");

const body = document.querySelector("body");
const contents = document.querySelector(".contents");

const drop_down = document.getElementById("drop_down");
const drop_down_area = document.getElementById("drop_down_area");
const projects_area = document.getElementById("projects_area");

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
drop_down.addEventListener("click", onClickDropDown);
drop_down_area.addEventListener("click", onClickDropDown);

function onDoubleClick(event) {
  currentPositionX = event.clientX - dice.getBoundingClientRect().width / 2;
  currentPositionY = event.clientY - dice.getBoundingClientRect().height / 2;
  translateDice(currentPositionX, currentPositionY);
}

const image_root = "assets/logo";

const css = "css.png";
const javascript = "javascript.png";
const nextjs = "nextjs.png";
const react_query = "reactQuery.png";
const react = "react.png";
const redux = "redux.png";
const styled_components = "styledComponents.png";
const tailwind = "tailwind.png";
const threejs = "threejs.png";
const typescript = "typescript.png";
const zustand = "zustand.png";

var logos = [
  css,
  javascript,
  nextjs,
  react_query,
  react,
  redux,
  styled_components,
  tailwind,
  threejs,
  typescript,
  zustand,
];

function onClickDropDown() {
  if (drop_down_area.classList.contains("slide_down")) {
    drop_down_area.classList.remove("slide_down");
  } else {
    drop_down_area.classList.add("slide_down");
  }

  if (projects_area.classList.contains("slide_down_projects")) {
    projects_area.classList.remove("slide_down_projects");
  } else {
    projects_area.classList.add("slide_down_projects");
  }
}

let projectDatas = [];
fetch("json/project.json")
  .then((response) => response.json())
  .then((items) => {
    projectDatas = items;

    items.map((item) => {
      const project_item = document.createElement("li");
      project_list.appendChild(project_item);

      project_item.setAttribute("id", item.id);
      project_item.classList.add("project_item");

      const project_title_dummy = document.createElement("div");
      project_item.appendChild(project_title_dummy);
      project_title_dummy.classList.add("project_title_dummy");

      const project_title = document.createElement("div");
      project_title_dummy.appendChild(project_title);
      project_title.classList.add("project_title");
      project_title.textContent = item.title;

      const project_image = document.createElement("img");
      project_item.appendChild(project_image);
      project_image.classList.add("project_image");
      project_image.src = item.thumb_url;
      console.log(`${item.thumb_url}`);

      project_item.addEventListener("mouseover", (event) =>
        onMouseoverProject(event, project_title)
      );

      project_item.addEventListener("mouseout", (event) =>
        onMouseoutProject(event, project_title)
      );

      project_item.addEventListener("click", (event) =>
        onClickProject(event, item.id)
      );
    });
  });

function onMouseoverProject(event, title) {
  title.classList.add("project_title_slide_up");
}

function onMouseoutProject(event, title) {
  title.classList.remove("project_title_slide_up");
}

function onClickProject(event, id) {
  projectDatas.map((item) => {
    if (item.id === id) {
    }
  });
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

    updateScreen();

    startMouseX = event.clientX;
    startMouseY = event.clientY;
  }
}

function stopDrag() {
  if (isDragging) {
    isDragging = false;
    updateContentsColor();
  }
}

function updateScreen() {
  dice.getBoundingClientRect();
}

setInterval(() => {
  currentRotationX += 3;
  currentRotationY += 3;
  currentRotationX %= 360;
  currentRotationY %= 360;

  rotateDice(currentRotationX, currentRotationY);
  updateContentsColor();
}, 500);

function translateDice(newX, newY) {
  currentPositionX = newX;
  currentPositionY = newY;
  dice.style.transform = `translateX(${currentPositionX}px) translateY(${currentPositionY}px) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
}

function rotateDice(newX, newY) {
  currentRotationX = newX;
  currentRotationY = newY;
  dice.style.transform = `translateX(${currentPositionX}px) translateY(${currentPositionY}px) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
}

function updateContentsColor() {
  const brightness = 70;
  contents.style.backgroundColor = `rgba(${
    (currentRotationX % 256) + brightness
  }, ${(currentRotationY % 256) + brightness}, ${
    ((currentRotationX + currentRotationY) % 256) + brightness
  }, 0.6)`;
}
