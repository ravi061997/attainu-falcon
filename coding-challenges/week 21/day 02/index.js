const divide = (dividend, divisor) => {
    let quotient = 0, neg = true;

    if( (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0) ){ neg = false; }

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    if(dividend < divisor) {return 0;}
    else if(dividend > 0 && divisor != 0){
         while(dividend >= divisor){
              dividend -= divisor;
              ++quotient;
         }
    } else { 

    return neg ? -quotient : quotient;
}
    return quotient;
}
console.log(divide(6,-2));