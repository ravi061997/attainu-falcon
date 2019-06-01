$.ajax({
  url:'https://api.github.com/users',
  dataType: 'json',
  success: function(data) {

    for(var i=0; i<data.length; i++) {
      console.log(i);
      console.log("username: " +data[i].login);
      console.log("image url: " +data[i].avatar_url + "\n");


      $('.card-deck').append('<div class = "card">'\
      <img src= "'+data[i].avatar_url +'" class ="card-img-top">\
      <div class ="card-body">\
      <h5 class ="card-title">'+data[i].login +'</h5>\
      </div>\
      </div>);
    }
  }
});
