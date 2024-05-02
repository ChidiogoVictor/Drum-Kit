
numberOfButtons = document.querySelectorAll(".drum").length;
var i = 0;
while (i<numberOfButtons){
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
i++;
}

function handleClick(){
  alert("i got clicked!");
}
