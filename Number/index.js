/**Difference42
 * The parameter n is given. 
 * Return the difference of n to the number 42. 
 * The number must be positive.
 */

function difference42(n) {
    return Math.abs(n - 42)
}

console.log(difference42(7));
console.log(difference42(42));
console.log(difference42(52));
console.log(difference42(20));
console.log(difference42(67));

/**
 * Count Odds
 * Given is an array numbers. 
 * Return the number of odd numbers. */

function countOdds(numbers) {
    let count = 0;
    //loop through the array and check each number
    for(let number of numbers){
        if(number % 2 !== 0){ // check if the number is dd
            count ++;
        }  
    }
  return count;
}
console.log(countOdds([1,5,2,6,5,3,9,2]));
console.log(countOdds([2,6,2,5,2,8]));
console.log(countOdds([1,1]));
console.log(countOdds([6,3,8,2]));


/**
 * Total product
 * Two numbers are given a and b. 
 * Return their sum. 
 * If both numbers are equal, 
 * return their product.
 * 
 */

function totalProduct(a, b) {
    if(a === b){
        return a * b
    }else {
        return a + b
    }
}
console.log(totalProduct(2,0));
console.log(totalProduct(7,7));
console.log(totalProduct(1,2));
console.log(totalProduct(8,6));
console.log(totalProduct(3,3));

/**Is 42?
 * Two numbers are given a and b. 
 * Return true if one of the two numbers is 42 
 * or the sum of the two numbers.
 */
function is42(a, b) {
 return a === 42 || b === 42 || (a + b) === 42
}

console.log(is42(23,21));
console.log(is42(42,0));
console.log(is42(12,30));
console.log();
console.log();