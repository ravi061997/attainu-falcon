function extractQuery(url) {
  var i,keys=[], values=[];
  var startIndex = url.indexOf('?');

  if(startIndex == -1) {
    return "Missing Query!";
  }

  for(i=startIndex; i<url.length; i++) {
    if(url.charAt(i)== '=') {
      keys.push(url.substring(startIndex+1 , i));
      startIndex = i;
    }
    else if(url.charAt(i) == '&' || i==url.length-1) {
      values.push(url.substring(startIndex+1, i+1));
      startIndex =i;
    }
    
  }
  values[values.length-1] == url.charAt(url.lengh-1);

  var object ={};
  for(i=0; i<keys.length;i++) {
    object[keys[i]]= values[i];
  }
  return object;
} 

console.log(extractQuery("http://localhost:3000/add?num1=5&num2=3&num3=10"));
