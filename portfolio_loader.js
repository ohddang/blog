window.addEventListener('resize', onResize);

const prev_arrow = document.getElementById("prev_arrow");
const next_arrow = document.getElementById("next_arrow");

prev_arrow.addEventListener('click', onPrevArrow);
next_arrow.addEventListener('click', onNextArrow);

const modal = document.getElementById("modal");
const modal_close = document.getElementById("modal_close");

modal_close.addEventListener('click', hideModal);
square.addEventListener('click', showModal);
game.addEventListener('click', showModal);

const element_list = document.getElementById("contents_list");

let move_x = 0;
let scroll_x = 0;
let item_count = 0;
let item_idx = 0;

fetch('json/portfolio.json')
    .then((response) => response.json())
    .then((items) =>{
      item_count = items.length;
      console.log(items);
      items.map( (item)=>{
        const content_item = document.createElement('li');
        element_list.appendChild(content_item);
        content_item.classList.add('content_item');
        
        const link_tag = document.createElement('a');
        content_item.appendChild(link_tag);
        link_tag.setAttribute("id", item.key);
      
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
    }); 

function onResize(){
  if(element_list){
    move_x = document.querySelector(".content_item").offsetWidth;
    scroll_x = item_idx * move_x * -1;
    console.log(scroll_x);
    element_list.style.transform = `translateX(${scroll_x}px)`;
  }
}

function showModal(event){
  modal.style.display = "flex";
}

function hideModal(event){
  modal.style.display = "none";
}

function onPrevArrow(){
  if(item_idx == 0)
    return;

  --item_idx;
  move_x = document.querySelector(".content_item").offsetWidth;
  
  if(scroll_x <= 0)
    scroll_x += move_x;

  console.log(scroll_x);
  element_list.style.transform = `translateX(${scroll_x}px)`;
  console.log(element_list.style.transform);
}

function onNextArrow(){
  if(item_idx == item_count-1)
    return;

  ++item_idx;
  move_x = document.querySelector(".content_item").offsetWidth;

  scroll_x -= move_x;
  element_list.style.transform = `translateX(${scroll_x}px)`;
  console.log(element_list);
}