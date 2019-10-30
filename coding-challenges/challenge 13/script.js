function checkPalindrome(string) {
  var n=string.length;
  for(var i=0; i<Math.floor(n/2); i++) {
    console.log(string.charAt(i)+ ''+ string.charAt(n-i-1));

    if(string.charAt(i) != string.charAt(n-i-1)) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome("aaaabbaa"));
console.log(checkPalindrome("aba"));
