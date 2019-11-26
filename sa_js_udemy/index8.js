
// L8. 008_Variables_and_Data_Types__(02_JavaScript_Language_Basics)

/*

Variables

- a variable is like a conatiner in which we store values, and through which we can use over and over again in our code.
- declaring a variable in js by using a keyword, var, let, const.

Data_Types : 

In js two types of data types 1) primitive data types and derived or complex data types.

1) primitive data types :- primitive data types is a non-object data types, and holds the single value.

- 1) Number : Floating point numbers, for decimals and integers. e.g. : 5 or 5.0 , js mein integer humesha floating point number hi rhete hai beshak hum var num = 5; ku na bana le.
- 2) String : Sequence of characters, used for text.
- 3) Boolean : Logical data type that can only be true or false.
- 4) Undefined : Data type of a variable that does not have a value yet.
- 5) Null : Also means 'non-existent'

2) complex data types :- complex data types is a object data types, and holds the multiple value.

Note : Javascript has dynamic typing : data types are automatically assigned to variables.(no need to defined data type manually to the variable) or kisi variable mein string value dalne ke bad int value reassign kar dinge toh js uska type automatically change kar degi, but in such case difficult to find bugs.
*/

console.log("L8. 008_Variables_and_Data_Types__(02_JavaScript_Language_Basics)");

var firstName = "Satty"; // through this a piece of memory is initilize in ur computer., here firstName is the variable name and Satty is the value.
console.log("firstName => ", typeof firstName, firstName); // firstName =>  string Satty

var lastName = 'Thakur'; 
console.log("lastName => ", typeof lastName, lastName); // lastName =>  string Thakur

var age = 23; // number type
console.log("age => ", typeof age, age); //age =>  number 23

var typeChange = 20; // number type
console.log("typeChange => ", typeof typeChange, typeChange); // typeChange =>  number 20

typeChange = 'make it string'; // dynamic convert into string type
console.log("typeChange => ", typeof typeChange, typeChange); // typeChange =>  string make it string

var fullAge = false; // boolean type   true or false
console.log("fullAge => ", typeof fullAge, fullAge); // fullAge =>  boolean false

var fullAge2 = 0; // number type
console.log("fullAge2 => ", typeof fullAge2, fullAge2); // fullAge2 =>  number 0

var fullAge3 = '0'; // string type
console.log("fullAge3 => ", typeof fullAge3, fullAge3); // fullAge3 =>  string 0

// i declared a varaible but not defined right now means didnot defined any value to this variable right now.
var job; // undefined type
console.log("job => ", typeof job, job); // job =>  undefined undefined

job = 'Teacher'; // become string type
console.log("job => ", typeof job, job); // job =>  string Teacher

// var 3years = 3; // Uncaught SyntaxError: Invalid or unexpected token  || Error : wrong way to declare variable:  

// we can not used reserved keyword of js like delete, function, if, else etc.
// var function = 'satty2'; // Uncaught SyntaxError: Invalid or unexpected token  || Error : wrong way to declare variable:  