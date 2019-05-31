 
document.getElementById('search').addEventListener('click', function() {
  var lang = document.querySelector("input").value;
  searchBooks(lang);

});
function searchBooks(lang) {
  $.ajax ({
  url: "https://github.com/attainu-falcon/attainu-falcon/blob/master/coding-challenges/data/books.json",
  dataType: "json",
  success: function(books) {
    $('body').remove();
    $('body').append("<table><tr><th>Title</th><th>Author</th><th>Country</th><th>Language</th><th>Link</th><th>Pages</th><th>Year</th></tr></table>");

    $('table').addClass('table table-striped');
    var i;
    for(i=0; i<back.length; i++) {
      if (books[i].language.indexOf(lang) != -1) {
        //console.log(books[i]);
        var row = '<tr>';
        row = row + '<td>' + books[i].Title + '</td>';
        row = row + '<td>' + books[i].Author + '</td>';
        row = row + '<td>' + books[i].Countary + '</td>';
        row = row + '<td>' + books[i].Language + '</td>';
        row = row + '<td>' + books[i].Link + '</td>';
        row = row + '<td>' + books[i].Pages + '</td>';
        row = row + '<td>' + books[i].Year + '</td>';
         var row = row +'<tr>';

        $('table').append(row);
      }
    }

  },
  statusCode: {
    400: function () { 
      console.log("Data Not Found!");

    }
  }
 })
}
