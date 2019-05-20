

function compareArrays(p,q) {
  var i, flag=true;
  if(p.length==q.length) {
    for(i=0; i<p.length; i++) {
      if(p[i]!=q[i]) {
        flag = false;
        break;
      }
    }

  }
  else {
    flag = false;
  }
  return flag;
}
var a =[2,3,4,5];
var b =[2,3,4];

console.log(compareArrays(a, b));

