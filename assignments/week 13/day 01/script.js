var myArray = [5,2,6,4,3,1];
document.getElementById("demo").innerHTML = myArray;  
console.log(myArray);
function myFunction() {
  myArray.sort(function(a, b){return b - a});
  document.getElementById("demo").innerHTML = myArray;
}

function func(){
  document.write(myArray.indexOf(3));
}
func();