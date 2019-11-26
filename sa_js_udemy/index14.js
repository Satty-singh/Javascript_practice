

//  Control Strcuture : statements and loops
// - used to only certain part of the code execute on the basis of some conditions.
// - or repeat some line of code again and again

// L14. 014_If__else_Statements

/*

If__else_Statements : Allows us to take decision with the code,



*/

console.log("L14. 014_If__else_Statements");

var firstName = 'John';
var civilStatus = 'single';

// if(expression) - any expression : x+x = y+y
if(civilStatus == 'married') {
    // if true then inside the if block code execute
   console.log(firstName + ' is married!');
}

var firstName2 = 'John';
var civilStatusMark = 'married';

if(civilStatusMark == 'married') {
   console.log(firstName2 + ' is married!');
}

// if else

var firstName3 = 'Satty';
var civilStatusMark2 = 'single';

if(civilStatusMark2 == 'married') {
   console.log(firstName3 + ' is married!');
} else {
    console.log(firstName3 + ' is soon!');
}

// suppose we already have a boolean variable. means true or false
var isMarried4 = false;

var firstName4 = 'Riya';

if(isMarried4 == false) {
   console.log(firstName4 + ' is married!');
} else {
    console.log(firstName4 + ' is soon!');
}

var isMarried5 = true;

var firstName5 = 'Amit';

if(isMarried5) { // isMarried already is true so no need to compare here you can compare
   console.log(firstName5 + ' is married!');
} else {
    console.log(firstName5 + ' is soon!');
}


var isMarried6 = true;

var firstName6 = 'Amit';

if(!isMarried6) { // isMarried already is then here became false so else execute
   console.log(firstName6 + ' is married!');
} else {
    console.log(firstName6 + ' is soon!');
}


console.log("Write in better way :  L13. 013_Coding_Challenge_1_Solution");

var massMark = 78; // in kg
var heightMark = 1.69; // in meters

var massJohn = 92; // in kg
var heightJohn = 1.95; // in meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

// var markHigherBMI = BMIMark > BMIJohn; // is BMIMark is higher than BMIJohn.

// console.log(BMIMark + ' > ' + BMIJohn);
// console.log("Is Mark\'s BMI higher than John\'s? " + markHigherBMI);

if(BMIMark > BMIJohn) { 
    console.log(BMIMark + ' > ' + BMIJohn);
    console.log("Mark\'s BMI higher than John\'s? ");
} else {
    console.log(BMIMark + ' > ' + BMIJohn);
    console.log("John\'s BMI higher than Mark\'s? ");
}
