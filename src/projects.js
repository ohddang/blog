const project_list = document.querySelector(".project_list");
const project_link = document.getElementById("project_link");
const home_icon = document.getElementById("home_icon");
const github_icon = document.getElementById("github_icon");
const select_title = document.getElementById("select_title");

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

let current_item_id = "";
let current_url = "";
let current_github = "";

const onMouseoverProject = (event, title) => {
  title.classList.add("project_title_slide_up");
};

const onMouseoutProject = (event, title) => {
  title.classList.remove("project_title_slide_up");
};

const onClickProject = (event, id) => {
  if ("" === current_item_id) {
    home_icon.style.opacity = "1.0";
    github_icon.style.opacity = "1.0";
  }

  const find = projectDatas.find((item) => {
    select_title.textContent = item.title;
    current_url = item.url;
    current_github = item.github;
    return item.id === id;
  });
};

const onClickDropDown = () => {
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
};

const onClickHomePage = () => {
  if ("" !== current_url) window.open(current_url, "_blank");
};

const onClickGithubPage = () => {
  if ("" !== current_github) window.open(current_github, "_blank");
};

drop_down.addEventListener("click", onClickDropDown);
drop_down_area.addEventListener("click", onClickDropDown);

home_icon.addEventListener("click", onClickHomePage);
github_icon.addEventListener("click", onClickGithubPage);

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

      project_item.addEventListener("mouseover", (event) => onMouseoverProject(event, project_title));

      project_item.addEventListener("mouseout", (event) => onMouseoutProject(event, project_title));

      project_item.addEventListener("click", (event) => onClickProject(event, item.id));
    });
  });
