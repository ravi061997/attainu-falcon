var fibonacci_series = function (n) 
{
  if (n==1) 
  {
    return [1,1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }

  if(n==2) {
    return[1,2];
  }
  else {
     var s = fibonacci_series(n - 2);
    s.push(s[s.length - 2] + s[s.length - 3]);
    return s;
  }

};

 console.log(fibonacci_series(10));
 


 
 
