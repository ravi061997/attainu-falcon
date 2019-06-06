function timeFormat(number) {
  var hr = Math.floor(number/3600);
  var min = Math.floor((number%3600) / 60);
  var sec = (number%3600)%60;

  return hr+":"+min+":"+sec;
}
console.log(timeFormat(126));
console.log(timeFormat(45));
console.log(timeFormat(3700));

