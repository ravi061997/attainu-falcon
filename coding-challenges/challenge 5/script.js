
function starPattern(n) {
  var i,j;
  for(i=1; i<=n; i++) {
    var string = "";
    for(j=1; j<=i; j++) {
      string = string + "*";
    }
    console.log(string);
  }
  for(i=n-1; i>=1; i=i--) {
    var string ="";
    for(j=1;j<=i;j++) {
      string = string + "*";
    }
    console.log(string);
  }

}
starPattern(5);
