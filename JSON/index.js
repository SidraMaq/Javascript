/**
 * First JSON
Two variables are given key and value. 
Return these values in JSON notation, 
but as a string, not an JSON object.

Examples:

{"name": "JSCodebox"}
 */
function firstJSON(key, value) {
  return `{"${key}":"${value}" }`
}

console.log(firstJSON("name", "JSCodebox")); 
console.log(firstJSON("language", "JavaScript"));  
/**
 * JSON to Object
 * Given is a JSON string json. 
 * Convert this string into an object 
 * and return the parameter title of the created object.
 */
function json2Object(json) {
  const object = JSON.parse(json);
  return object.title;
}

console.log(json2Object(
  '{"headline": "Test", "title": "JSON", "category": "4"}'
));

console.log(
  json2Object(
    '{"title": "JSCodebox", "category": "2"}'
  )
);
console.log(
  json2Object(
    '{"params": "none", "title": "Foobar"}'
  )
)

/***
 * Object to JSON
 * An object obj is given. 
 * Change this object to a JSON string and return it.
 */

function object2JSON(obj) {
  const json = JSON.stringify(obj);
  return json;
}

console.log(object2JSON(
  {"name":"JSCodebox","release":"yesterday"}
))