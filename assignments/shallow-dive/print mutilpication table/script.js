
document.querySelector("button").addEventListener("click",function() {
  var n = document.querySelector("input").value;
  console.log(n);
  for(i=1; i<=10; i=i+1) {
    var tableString = document.querySelector("div").innerText;
    document.querySelector("div").innerText = tableString + n + " * " + i + "=" + (n*i) + '\n'; 
  }
})
