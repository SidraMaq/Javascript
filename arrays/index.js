/**
 * More4than0
 * Given is an array n with integers. 
 * Return true if it contains more four than zero.
 */

function more4than0(n) {
    let count4 = 0;
    let count0 = 0;

    for(let number of n){
        if(number === 4){ //check if number is equal to 4
            count4 ++;
        }else if(number === 0){
            count0 ++;
        }
    }

    return count4 > count0;
  
}

console.log(more4than0([1,4,0]));
console.log(more4than0([3,1,4,4,4,1]));
console.log(more4than0([4,0,4,0]));
/**
 * Reverse Letters
Given is an array chars with different letters. 
Return the array in reverse order.
 */
function reverseLetters(chars) {
  return chars.reverse();
}

console.log(reverseLetters(['b','d','x','p','c']));
console.log(reverseLetters(
    ['a','r','s','t','j','e','e','a','y']
  ));
 console.log(reverseLetters(['a','r']));


/**
 * The golden middle
 * Given are two arrays a and b, 
 * both have three elements.
 * Return a new array of length 2 c
 * ontaining both middle (index 1) elements of the arrays.
 * 
 */
function goldenMiddle(a, b) {
    return [a[1], b[1]];
}

console.log(goldenMiddle(
    [1,6,8],
    [4,6,2]
  ));
 console.log(goldenMiddle(
    [4,7,2],
    [2,6,4]
  )); 
 console.log(goldenMiddle(
    [4,7,2],
    [2,6,4]
  )); 
 