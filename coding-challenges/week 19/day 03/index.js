function square_root_binary(number) {

    if (number == 0 || number == 1)
      return number;
    
    let result = 0;
    let start = 0;
    let end = number;
    
    while (start <= end) {
      let mid = (start + end) / 2;
      mid = Math.floor(mid);
      
      if (mid * mid == number) {
        return mid;
      }
      
      if (mid * mid < number) {
        start = mid + 1;
        result = mid;
      }
      
      else {
        end = mid - 1;
      }
    }
  
    return result;
  }
  console.log((square_root_binary(11)));
  