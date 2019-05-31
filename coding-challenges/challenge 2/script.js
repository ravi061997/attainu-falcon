
function printInitials(name) {
  var i, initials;

  initials = name.charAt(0);
  for(i=0; i<name.length; i++) { 
    if(name.charAt(i) == " ") {

      initials = initials + name.charAt(i+1);
      i=i+1;
    }
  
  }
  console.log(initials);
}

printInitials("Mahendra Singh Dhoni")
printInitials("Sah Rukh Khan")
