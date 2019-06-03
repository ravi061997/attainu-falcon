

function checkAnagram(string1, string2) {
  if(string1.length == string2.length) {
    var i,j, a = [];
    for(i=0; i<string.length; i++) {
      a.push(string1.charAt(1));
    }

    for(i=0; i<a.length; i++) {
      for(j=0; j<a.length; j++) {
        if(a[j] == string2.charAt(i) && a[j]!="") {
          a[j]="";
        }
      }
    } 

    for(i=0; i<a.length; i++) {
      if(a[i]!="") {
        return false;
      }
    } 

    return true;  
  }
  else {
    return false;
  }
}

console.log(checkAnagram("ravi" , "rvai"));
