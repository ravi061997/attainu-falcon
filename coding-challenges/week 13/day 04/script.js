//function to check if the number if the is prime or not


function primeNum(num) {

    //setting up the counter to count how many times the loop returns 0 remainder.
  
    var counter = 0;
  
    //checking if the number is 1 if it is we will just return false because 1 is not a prime number.
  
    if (num <= 1) {
      return false;
    }
  
    /*for loop to check if the number can be divided by another number other than 1 and the number itself if that number can be devided by other number except the 1 and the number itself we will increment the counter.
    for example if the entered number is 10  we will divide it by 1,2,3,4,5,6,7,8,9 in nine for loop iterations if the value of the counter is greater than 2 that we can return that the given number is not a prime number else we can return the number is prime number
    */
  
    for (var i = 1; i <= num; i++) {
      if (num % i == 0) {
        counter = counter + 1;
      }
    }
    if (counter > 2) {
      return false;
    }
    return true;
  }
  
  // function to printout n number of prime numbers.
  
  function getPrimeNumbers(num) {
  
    // declaring an array to hold n number of prime numbers.
  
    var primeArray = [];
  
    /* We  want n number of prime numbers then the length of the primeArray should be less than or equal to the number passed in the function as a parameter.
    inside loop we will call primeNum function to check if the number is prime or not if the number is a prime number we will push that number to primeArray if the number is not a prime number we will continue our loop.
    */
  
    for (var i = 2; primeArray.length <= num; i++) {
      if (primeNum(i)) {
        primeArray.push(i);
      }
    }
    return primeArray;
  }
  
  console.log(getPrimeNumbers(50));
  
  console.log(primeNum(4));
  console.log(primeNum(5));