var fibonacci_series = function (n) 
{
  if (n==1) 
  {
    return [1];
  } 
  else if(n==2)
  {
    
    return [1,1];
  }
  else {
     var arr = fibonacci_series(n-1);
    arr.push(arr[n-2]+arr[n-3]);
    return arr;
  }

}

 console.log(fibonacci_series(10));
