var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];
//imperative approach
var squareNumbers=[];
for(var i=0; i<=numbers.length; i++) {
    var square;
    if(numbers[i]%2===0) {
        square = numbers[i]*numbers[i];
        squareNumbers.push(square)
    }
}
console.log(squareNumbers);

//functional approach
var evenNumbers = numbers.filter((item)=>{
    return item %2 === 0;
})
console.log(evenNumbers)
var squareNumbers = evenNumbers.map((item) => {
    return item*item;
})
console.log(squareNumbers);
