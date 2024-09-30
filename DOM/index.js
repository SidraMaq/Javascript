/**
 * Headline
Given is a text headline.
 Write this string in a h1 HTML tag 
 and append it to the HTML body.
 */
 function printHeadline(headline) {
  let heading = document.createElement('h1');
  heading.textContent = headline;
  document.body.appendChild(heading)
 }
 printHeadline("This is heading 2");
 /**
  * Bluescreen
The HTML element .bg is given. 
Change the background color of this element to 'blue'.
  */
function bg(){
  let checkBg = document.querySelector('.bg');
  checkBg.style.backgroundColor = 'blue';
}
bg()
/**Check me!
Set the given checkbox (#my-checkbox) checked. 
*/
function checkMe() {
  let checkbox = document.getElementById('my-checkbox');
 checkbox.checked = true;
}
checkMe();
/**
 * What's my name?
Read the first name and last name from the inputs
 (#firstname and #lastname) 
and write the full name into the 
#fullname input. If an input is not filled add this placeholder #.
 */
function whatIsMyName() {
  //access firstname and lastname 
  const firstnameInput = document.getElementById("firstname");
  const lastnameInput = document.getElementById("lastname");

  let fullNameInput = document.getElementById("fullname");

  const firstName = firstnameInput.value || '#';
  const lastName = lastnameInput.value || "#";


  fullNameInput.value = `${firstName} ${lastName}`
  
}
whatIsMyName()

/**
 * Welcome to my class
 * Given is a string className. 
 * Create a p element which has className as class 
 * and className as content. 
 * In the output, the first letter should be displayed in capital letters.
 *  Append the created element to the body tag.
 */
function welcomeToMyClass(className) {
  const p = document.createElement('p');
    
  // Capitalize the first letter of className
  const capitalizedClassName = className.charAt(0).toUpperCase() + className.slice(1);
  
  // Set the class of the p element
  p.className = className;
  
  // Set the content of the p element
  p.textContent = capitalizedClassName;
  
  // Append the p element to the body of the document
  document.body.appendChild(p);
}
welcomeToMyClass('example')

/**
 * 

Headline 2 

The string greeting is given. 
Output this string in a HTML p tag 
and color the font green 
if greeting contains the word 'Hi' and blue 
if greeting contains the word 'Hello'. 
If both occur, the word turns red. 
Print the content into the body tag.
 */

function headline2(greeting) {
  // Create a p element
  const p = document.createElement('p');
    
  // Set the text content to the greeting
  p.textContent = greeting;
  
  // Check the content of greeting and set the font color accordingly
  if (greeting.includes('Hi') && greeting.includes('Hello')) {
      p.style.color = 'red'; // If both "Hi" and "Hello" are present, set color to red
  } else if (greeting.includes('Hi')) {
      p.style.color = 'green'; // If only "Hi" is present, set color to green
  } else if (greeting.includes('Hello')) {
      p.style.color = 'blue'; // If only "Hello" is present, set color to blue
  }
  
  // Append the p element to the body
  document.body.appendChild(p);
  
}