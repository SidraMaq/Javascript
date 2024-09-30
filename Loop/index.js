/**
 * Code a for loop that runs through 
 * all numbers from 0-99 and append all numbers 
 * divisible by seven into a string. 
 * Return this string.
 */

function easyLoop() {
    let result = '';  // Initialize an empty string
    
    // Loop through numbers from 0 to 99
    for (let i = 0; i <= 99; i++) {
        // Check if the number is divisible by 7
        if (i % 7 === 0) {
            result += i;  // Append the number to the result string
        }
    }
    
    return result;
  
}
console.log(easyLoop()); 

/**
 * StrangeWord
 * Given is a word word. 
 * Run through the word 
 * and merge every second letter into a new word.
 */
function strangeWord(word){
    let result = '';
    if(word !== ''){
        for(let i = 0; i <= word.length; i += 2){
            result += word[i]
        }
    }
   return result;
}

console.log(strangeWord("hangman")); 
console.log(strangeWord("hangerman")); 