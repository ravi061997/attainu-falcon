function printSquares() {
  var i;
  var table = document.createElement('table');
  document.querySelector('body').appendChild(table);
  table.style.border = "1px solid  darkgrey";

  for(i=0; i<=10; i++) {
    var row = document.createElement('tr');
    table.appendChild(row);
    var number , square;
    
    if(i==0) {
      number = document.createElememt('th');
      var text = document.createTextNode("Numbers");
      number.appendChild(text);
      square = document.createElement('th');
      square.textContent = "Squares";
    }
    else {
      number = document.createElememt('td');
      number.style.backgroundcolor = "grey";
      number.textContent = i;
      square = document.createElement('td');
      square.style.backgroundcolor = "grey";
      square.style.width = "100px";
      square.textContent = i*i;
    }
    row.appendChild(number);
    row.appendChild(square);
    
  }
}

printSquares();
