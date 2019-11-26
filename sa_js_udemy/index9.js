
// L9. 009_Variable_Mutation_and_Type_Coercion

/*

Variable Mutation : 

Variable Type Coercion :

*/

console.log("L9. 009_Variable_Mutation_and_Type_Coercion");

var firstName = 'Satty';
var age = 23;
var strNum1 = firstName + ' ' + age; // typeCoercion : boz here firstName is string but age is number. that means js automatically converts types to one another when its needed. 

console.log(firstName + ' ' + age); // Satty 23 
// like in this case it converted into string , firstName, space were string but age is not a string, it is number.
console.log("strNum1 => ", typeof strNum1, strNum1); // strNum1 =>  string Satty 23

// To declare many variable in same line and define them later
var job, isMarried;

console.log("job =>", job); // job => undefined
console.log("isMarried =>", isMarried); // isMarried => undefined

job = 'Teacher';
isMarried = false;
var isUndefined;
var isNull = null;
console.log("job =>", job); // job => Teacher
console.log("isMarried =>", isMarried); // isMarried => false
console.log("isUndefined =>", isUndefined); // isUndefined => undefined
console.log("isNull =>", isNull); // isNull => null
console.log(firstName + ' is an ' + age + ' year old ' + job + '. Is he Married? ' + isMarried + '. Is undefined ? ' + isUndefined + '. Is null ? ' + isNull); // Satty is an 23 year old Teacher. Is he Married? false. Is undefined ? undefined. Is null ? null
// Here all the variables get type coercion in string.

// Note here, even boolean gets converted into string. so js also does type coercion with boolean, number, undefined, string, and null.

// Variable mutation :

var myage1 = 23; // here number type
console.log(" myage1 => ", typeof myage1, myage1); //  myage1 =>  number 23
myage1 = 'twenty eight'; // here became as string type
console.log(" myage1 => ", typeof myage1, myage1); //  myage1 =>  string twenty eight





