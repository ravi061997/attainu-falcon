
const sumOfSquare = n => {
    let sum = 0;
    for( let i=1; i<=n; i++) {
        sum += (i*i);
    }
    return sum;
}

const squareOfSum = n => {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i
    }
    return sum*sum;

}

const main = n => {
    return (squareOfSum(n) - sumOfSquare(n));
}

console.log(main(10));