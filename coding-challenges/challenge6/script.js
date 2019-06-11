var ch ="A";

$.ajax({
  url:"https://raw.githubusercontent.com/attainu-falcon/attainu-falcon/master/coding-challenges/data/cities.json",
  dataType:"json",
  success: function(data) {
    for(i=0;i<data.length; i++) {
      if(data[i].name.charAt(0)== ch) {
        console.log(data[i].name);
      }
    }
  },
  statusCode: {
    404: function() {
      alert("file not found");
    }
  }
});
