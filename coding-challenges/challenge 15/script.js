
function LetterChanges(str) {
  
  str = str.trim().toLowerCase();
  var len = str.length;
  var newStr = '';
  
  for (var i = 0; i < len; i++) {
    if (/[a-ce-gi-mo-su-y]/.test(str[i])) {
      newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 97)    
    }
    else if (/[zdhnt]/.test(str[i])) {
        newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 65);
    }
    else {
     newStr += str[i]; 
    }
  }
  return newStr; 
         
}
LetterChanges(str);
