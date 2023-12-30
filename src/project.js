const skill_list = document.querySelector(".skill_list");
const project_list = document.querySelector(".project_list");

const image_root = "/assets/logo";

const css = "css.png";
const js = "js.png";
const nextjs = "nextjs.png";
const react_query = "react-query.png";
const react = "react.png";
const redux = "redux.png";
const styled_components = "styled-components.png";
const tailwind = "tailwind.png";
const threejs = "threejs.png";
const typescript = "typescript.png";
const zustand = "zustand.png";

var logos = [
  css,
  js,
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

// project info
fetch("json/project.json")
  .then((response) => response.json())
  .then((items) => {
    console.log(items);
    items.map((item) => {
      const project_item = document.createElement("li");
      project_list.appendChild(project_item);
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

      project_item.addEventListener("mouseover", (event) =>
        onMouseover(event, project_title)
      );

      project_item.addEventListener("mouseout", (event) =>
        onMouseout(event, project_title)
      );
    });
  });

function onMouseover(event, title) {
  console.log(event);
  title.classList.add("project_title_slide_up");
}

function onMouseout(event, title) {
  title.classList.remove("project_title_slide_up");
}

// logo
logos.map((logo) => {
  const skill_item = document.createElement("li");
  skill_list.appendChild(skill_item);
  skill_item.setAttribute("id", logo);
  skill_item.classList.add("skill_item");
  const skill_image = document.createElement("img");
  skill_item.appendChild(skill_image);
  skill_image.classList.add("skill_image");
  skill_image.src = `${image_root}/${logo}`;
});
