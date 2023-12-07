const owner = "GonGon's>"

const pre_command = document.getElementById("pre_command");
const input_command = document.getElementById("input_command");

function on_key_press(event){
  console.log(event)

  if(event.keyCode == 13){
    pre_command.textContent += owner + input_command.value + "" + "\r\n";
    input_command.value = "";
  }
}