function nextLetter(string) {
  var i, nextString="";

  for(i=0; i<string.length; i++) {
    var code = string.charCodeAt(i);
    if(code==90)
       code==65;
       else if(code == 122)
       code=97;
       else
    code = code+1;
    nextString = nextString+String.fromCharCode(code);
  }
  return nextString;
}
console.log(nextLetter("hello"));
console.log(nextLetter("zeta"));
