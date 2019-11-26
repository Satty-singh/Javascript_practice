// L16 - 016_The_Ternary_Operator_and_Switch_Statements

/*

The_Ternary_Operator : alternative of if else in one line.

*/

console.log('L16 - 016_The_Ternary_Operator_and_Switch_Statements');

var firstName = 'John';
var age = 16; // set 22

// agar john 18 ka hai toh beer pita hai warna juice
age >= 18
  ? console.log(firstName + ' drinks beer. ')
  : console.log(firstName + ' drinks juice. ');

var firstName2 = 'John2';
var drink = age >= 18 ? 'beer' : 'juice'; /// ab result store ho jayega sidha drink mein and drink ko console kara linge
console.log(firstName2 + ' drinks ' + drink);

// write same thing using if else self.
// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement : multipple if else statement or ladder statment.
// break ka use switch mein isliye karte hai taki jaise hi koi bhi case firstly match ho jayte toh ange kr code execute na kare sidha bahar ajaye switch se.

var job = 'teacher'; // set driver , cop, theif

switch (job) {
  case 'teacher':
    console.log(firstName + 'teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + 'drives an uber in noida.');
    break;
  case 'designer':
    console.log(firstName + 'design a beautiful webpages.');
    break;
  default:
    console.log(firstName + ' does something else.');
  // here no need of break
}

// MUltiple case execution

var job2 = 'instructor'; // set driver , cop, theif

switch (job2) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + 'teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + 'drives an uber in noida.');
    break;
  case 'designer':
    console.log(firstName + 'design a beautiful webpages.');
    break;
  default:
    console.log(firstName + ' does something else.');
  // here no need of break
}

// do thrugh switch

// var firstName = 'John';
// var age = 16;

// if (age < 13) {
//     console.log(firstName + ' is a boy. ');
// } else if (age >= 13 && age < 20) { // between 13 and 20
//     console.log(firstName + ' is a teenager. ');
// } else if (age >= 20 && age < 30) { // between 20 to 30 --
//     console.log(firstName + ' is a young men. ');
// }else {
//     console.log(firstName + ' is a men. ');
// }

var firstName3 = 'John';
var age3 = 16; // set 2, set 22

// hum switch krna chahte hai true wale case mein only
switch (true) {
  case age3 < 13:
    console.log(firstName + ' is a boy. ');
    break;
  case age3 >= 13 && age3 < 20:
    console.log(firstName + ' is a teenager. ');
    break;
  case age3 >= 20 && age3 < 30:
    console.log(firstName + ' is a young men. ');
    break;
  default:
    console.log(firstName + ' is a men. ');
  // here no need of break
}
