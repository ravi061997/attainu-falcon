function hamming(string1,string2) {
  var count = 0;
  string1 = string1.toString();
  string2 = string2.toString();
  if(string1.length == string2.length) {
    for(var i=0; i<string1.length; i++) {
      if(string1.charAt(i) != string2.charAt(i)) {

        count = count+1;
      }
    }
    console.log("Hamming distance between the string:" + count);

  }
  else {
    console.log("String length does not match!");
  }
}

hamming("karolin", "kathrin");
hamming("karolin","kerstin");
hamming(1011101,1001001);
hamming(2173896,2233796);
