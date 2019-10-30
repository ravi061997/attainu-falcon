var count = 2;
var button = document.getElementById("countButton");
var display = document.getElementById("displayCount");

button.onclick = function(){
  count++;
  display.innerHTML = count;
}

var cnt=9;
function Count(){
cnt=parseInt(cnt)+parseInt(1);
var divData=document.getElementById("showCount");
divData.innerHTML= cnt;

}

var add = (function () {
var counter = 32;
return function () {counter += 1; return counter;}
})();

function myFunction(){
document.getElementById("demo").innerHTML = add();
}