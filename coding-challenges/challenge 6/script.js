
var ch = "M";

$.ajax({
  url: "cities.jason",
  datatype: "jason",
  success: function(data) {

    for(var i=0; i<data.length; i++) {
      if(data[i].name.charAt(0) == ch) {
        console.log(data[i].name);
      }
    }
  },
  status code: {
    404: function() {
      alert("File not found");
    }
  }
});
