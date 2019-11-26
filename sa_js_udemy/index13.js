

//  L13. 013_Coding_Challenge_1_Solution

/*



*/

console.log("L13. 013_Coding_Challenge_1_Solution");

var massMark = 78; // in kg
var heightMark = 1.69; // in meters

var massJohn = 92; // in kg
var heightJohn = 1.95; // in meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn; // is BMIMark is higher than BMIJohn.

console.log(BMIMark + ' > ' + BMIJohn);
console.log("Is Mark\'s BMI higher than John\'s? " + markHigherBMI);