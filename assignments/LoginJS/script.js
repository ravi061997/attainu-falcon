var username ="user_123";
var password = "password";

document.querySelector("#Login").addEventListener("click",function() {
  validate(username,password);
});
function validate(username,password) {
  var user=document.querySelector("#user").value;
  var user=document.querySelector("#pass").value;
  if(user.length<6) {
    alert("Username must contain 6 or more characters");
    return false;
  }
  else if(pass.length<8) {
    alert("Password must contain 6 or more characters");
    return false;
  }
  else if(!isAllowed(user)) {
    alert("Username contains invalid characters");
    return false;
  }
  else if (!isNaN(parseInt(user[0]))) {
    alert("Username can not start with a digit");
    return false;
  }
  else if (user.toLowerCase()!=username.toLowerCase() || pass != password) {
    alert("Username and Password do not match");
    return false;
  }
  else {
    alert("Logged in successfully");
    return true;
  }
}

function isAllowed(string) {
  var i, code;
  for(i=0; i<string.length; i++) {
    code = string.charCodeAt(i);
    if(!(code>47 && code<58) &&
    !(code>64 && code<91) &&
    !(code>96 && code<123) &&!code(code == 95)) {
      return false;
    }
  }
  return true;
}
