//1
//Log 'Hello World' in the console - 
//the best known task of programming!
console.log("Hello World")

/**2. bugfix
A string string is given. Replace every occurrence of 
the word 'bug' with the word 'flower'. */
function bugFix(string){
    return string.replace("bug", "flower");
}

//Test cases
console.log(bugFix('xxbugYYX'));
console.log(bugFix('bug'));
console.log(bugFix('xxbugXYYy'));

/**A string string is given. Remove any occurrence of 'bug' by 'flower'. 
 * Attention: 'bug' can occur several times in the string. */
function bugFixFinal(string) {
   return string.replaceAll("bug", "flower")
}

//Test cases
console.log(bugFixFinal('xxbugYYX'));
console.log(bugFixFinal('bug'));
console.log(bugFixFinal('xxbugXbugbugYYy'));
console.log(bugFixFinal('bugXYYbugxX'));


/**
 * A string url is given. 
 * It contains a URL with the HTTP protocol.
 *  Return this URL with the HTTPS protocol.
 */
function http2https(url) {
  if(url.startsWith("http")){
    return url.replace("http://", "https://")
  }
  return false
}

//Test Cases
console.log(http2https('http://jscodebox.com/'));
console.log(http2https('http://jscodebox.com/'));
console.log(http2https(
    'http://jscodebox.com/index.php?id=2'
  ));
  console.log(http2https(
    'http://jscodebox.com:80/home'
  ));  


/**
 * Given are two strings password and password_repeat. 
 * Check if the password is secure by the following critera:
- both passwords must match
- password must be at least 20 chars

Return true only if all criteria are met, otherwise return false. */  

function checkPassword(password, password_repeat) {
    if(password === password_repeat && password.length >= 20){
        return true
    }
    return false;
}


  console.log(checkPassword(
    'omvdsse',
    'omvdsse'
  ));

  console.log(checkPassword(
    'gizzard-fiesta-dispel-disgorge-never-chisel',
    'gizzard-fiesta-dispel-disgorge-never-chisel'
  ));

  console.log(checkPassword(
    'HUIFDSJHKSADN',
    'HUIFDSJHKSADN'
  ));

  console.log(checkPassword(
    'JoFDd#0MY6Ad4',
    'JoFDd#0MY6Ad4'
  ))