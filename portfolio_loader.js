

const prev_arrow = document.getElementById("prev_arrow");
const next_arrow = document.getElementById("next_arrow");

prev_arrow.addEventListener('click', onPrevArrow);
next_arrow.addEventListener('click', onNextArrow);

const element_list = document.getElementById("contents_list");

let items = JSON.parse(JSON.stringify('json/portfolio.json'));

const move_x = 759;
let scroll_x = 0;

items.map( (item)=>{
  const content_item = document.createElement('li');
  element_list.appendChild(content_item);
  content_item.classList.add('content_item');
  
  const link_tag = document.createElement('a');
  content_item.appendChild(link_tag);
  link_tag.setAttribute("name", item.key);

  const content_title = document.createElement('div');
  content_item.appendChild(content_title);
  content_title.classList.add("content_title")
  content_title.innerText = item.content_title;

  const content_thumb = document.createElement('div');
  content_item.appendChild(content_thumb);
  const content_thumb_img = document.createElement('div');
  content_thumb_img.classList.add("content_thumb_img");
  content_thumb_img.innerText = item.content_thumb_img;
  content_thumb.appendChild(content_thumb_img);
  const content_thumb_desc = document.createElement('div');
  content_thumb_img.classList.add("content_thumb_desc");
  content_thumb_img.innerText = item.content_thumb_desc;
  content_thumb.appendChild(content_thumb_desc);

  const content_desc = document.createElement('div');
  content_item.appendChild(content_desc);
  content_desc.classList.add("content_desc");
  content_desc.innerText = item.content_desc;  
});

function onPrevArrow(){
  if(scroll_x <= 0)
    scroll_x += move_x;

  console.log(scroll_x);
  element_list.style.transform = `translateX(${scroll_x}px)`;
  console.log(element_list.style.transform);
}

function onNextArrow(){
  scroll_x -= move_x;
  element_list.style.transform = `translateX(${scroll_x}px)`;
  console.log(element_list);
}