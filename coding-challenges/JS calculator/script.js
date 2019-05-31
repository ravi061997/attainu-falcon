
var buttonList = document.querySelectorAll("button");
var i;
var display = document.querySelector("div");

for(i=o; i<buttonList.length; i++) {
buttonList[i].addEventListener("click",calculate);
}
function calculate {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  switch(this.value) {
    case "add": display.innerText =a+b;
                break;
    case "substract": display.innerText = a-b;
                      break;
    case "mutiply": display.innerText =a*b;
                    break;
    case "divide": display.innerText =a/b;
                   break;                 
  }
}
