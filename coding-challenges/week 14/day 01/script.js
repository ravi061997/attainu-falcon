function sumOfSeries(n) {
    var sum =0;
    for(var i =0; i<=n; i++){
        for (var j=1; j<=i ; j++) {
            sum+= j;
        }
    }
    return sum;
}

// function sumOfSeries2(n) {
//     return (n*(n+1)*(n+2))/6;
// }
console.log(sumOfSeries(5));
console.log(sumOfSeries(10));