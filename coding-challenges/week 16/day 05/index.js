function displayPyramid(n) {
    for (var i = 1; i <= n; i++) {
      var str = '';
      for (var j = n-i; j > 0; j--) {
        str+= ' ';
      }
      for (var j = 0; j <i; j++) {
        str+= ' * ';
      }
      console.log(str);
    }
  }

  displayPyramid(5);