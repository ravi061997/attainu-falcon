
function findPrimes(n) {
    var a = Array(n).fill(false);

    for(var i = 2; i<= Math.sqrt(n); i++) {
        for (var j = i * 1; j <= n; j++) {
            if(j % i == 0) a[j] = true;
        }
    }
    for(var i = 2; i <= n; i++) {
        if(!a[i]) console.log(i);
    }
}
findPrimes(100);