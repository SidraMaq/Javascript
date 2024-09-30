/**
 * The ground
Given is an object obj each with two properties (name & category) of type String. 
Return the value of the property with the longer string. 
If both are of equal length, 
return the value of the name property.
 */

function theGround(obj) {
   //compare name and category length
   if(obj.name.length > obj.category.length){
      return obj.name
   }else if(obj.category.length > obj.name.length){
      return obj.category
   }else{
      return obj.name
   }
  
}
console.log(theGround(
   {"name":"dirt","category":"alpha"}
 ));
 console.log(
   theGround(
      {"name":"stone","category":"alpha"}
    )
 )
 console.log(
   theGround(
      {"name":"quartz","category":"gamma"}
    )
 )
/**
 * Building a car

Create an object with the following characteristics:
 4 wheels (named wheels as integer),
  100PS power (named power and integer),
   3 doors (named doors as integer).
    Return the built car.
 */
    function buildingACar() {
      //create an object with required categories
      const car = {
         wheels: 4,
         doors: 3,
         power: '100PS'
      }
      //return built car object
      return car;

    } 
    console.log(buildingACar())

    /**
     * Clone Object
     * Given is an object object. 
     * Return a clone of the object except the object properties 
     * given in the array removeProperties.
     */

    function cloneObject(object, removeProperties) {
      //create a clone if the object by using spread operator
      const clonedObject = {...object};
      //loop through removedProperties an array and delete the each property from clone
      for(let property of removeProperties){
         delete cloneObject[property];
      }
      //return clone 
      return clonedObject;

    }

    console.log(cloneObject(
      {"name":"Iron Man","age":42,"superPower":"None","friends":0,"overweight":true,"hungry":true},
      ["overweight","hungry"]
    ));
    console.log(cloneObject(
      {"a":1,"z":25,"h":8,"i":9,"d":4,"u":20,"p":15},
      []
    ));

    //// Function to compute the product of p1 and p2
    function myFunction (p1, p2){
      return p1 * p2
    }

    console.log(myFunction(2, 4));
    let carName = "Honda City";

    const car = {
      car: 'vite',
      modal:2016,
      price : '20,000'
    }
    //object literals 

    // Create an Object
   const person1 = {
      name: "John",
      age: 30,
      city: "New York"
   };
   
   // Build a Text
   let text = "";
   for (let x in person1) {
      text += person1[x] + " ";
   };
   console.log(text)
  
     delete person1.age;

     function Person(first, last, age, gender){
      this.firstName = first,
      this.lastName =  last;
      this.age = age;
      this.gender = gender;
     }

     const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
console.log(myFather)