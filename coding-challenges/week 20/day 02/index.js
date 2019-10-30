function reverseDigit(int) {
    var res = 0;
    val = Math.abs(int);

    while(val>0) {
        console.log(val);
        res = res*10+(val%10);
        val = Math.floor(val/10);
        console.log(res);
        console.log(val);
        console.log("end iteration");
    }
    res = res * Math.sign(int);
    return res;
}

console.log(reverseDigit(321));