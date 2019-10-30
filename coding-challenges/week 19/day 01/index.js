
function sum(n) {
    let result = 0;
    while (n>0) {
        let digit;
        digit = n %10;
        console.log(`This is n => ${n} and this is digit ${digit}`);
        result = result + (n%10);
        n = Math.floor(n/10);
    }
    return result;
}
console.log(sum(Math.pow(2,15)))