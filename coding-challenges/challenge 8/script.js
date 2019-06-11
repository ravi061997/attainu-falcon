
document.getElementById('search').addEventListener('click' , function() {
  
  var lang = document.querySelector('input').value;
  searchBooks(lang);
})
function searchBooks(lang) {
  $.ajax ({
  url: "https://raw.githubusercontent.com/attainu-falcon/attainu-falcon/master/coding-challenges/data/books.json",
  dataType: "json",
  success: function(books) {
    $('table').remove();
    $('body').append("<table><tr><th>Title</th><th>Author</th><th>Country</th><th>Language</th><th>Link</th><th>Pages</th><th>Year</th></tr></table>");

    $('table').addClass('table table-striped');
    var i;
    for(i=0; i<books.length; i++) {
      if (books[i].language.indexOf(lang) != -1) {
       //console.log(books[i]);
        var row =  '<tr>';
        row = row + '<td>' + books[i].title + '</td>';
        row = row + '<td>' + books[i].author + '</td>';
        row = row + '<td>' + books[i].country + '</td>';
        row = row + '<td>' + books[i].language + '</td>';
        row = row + '<td>' + books[i].link + '</td>';
        row = row + '<td>' + books[i].pages + '</td>';
        row = row + '<td>' + books[i].year + '</td>';
        row = row +'</tr>';

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
