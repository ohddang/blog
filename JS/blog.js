const ownerCommand = "GonGon's>"

const pre_command = document.getElementById("pre_command");
const input_command = document.getElementById("input_command");
const page_list = document.getElementById("page_list");

let pages_map = new Map();

function on_key_press(event){
  console.log(event)

  if(event.keyCode == 13){
    pre_command.textContent += ownerCommand + input_command.value + "" + "\r\n";
    input_command.value = "";
  }
}