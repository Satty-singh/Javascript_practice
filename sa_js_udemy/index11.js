

//  L11. 011_Operator_Precedence

/*

Operator Precedence :



*/

console.log("L11. 011_Operator_Precedence");

// suppose if we want to calculate john year , based on which year john was born.

var nowAge = 2020;
var bornYear = 1996;
var fullAge = 18;

// here more than one operator used, so how would js decide which will execute first.

var isFullAge = nowAge - bornYear >= fullAge; // here three opeartors.

console.log(" isFullAge => ", isFullAge); // isFullAge =>  true
console.log(nowAge - bornYear +' >= '+ fullAge); // 24 >= 18

// Note : here minus has more precedence 16 then > greater than and = equal to precedence 11
// for this read mozilla site for operator precedence , www.codingheroes.io/resource
// NOte : assignment is also a opertor.

// Quest : how to find precedence of opertors through code

// Lets calculate average age of join and his freind

var ageJohn = nowAge - bornYear;
var ageMark = 35; 
// var avgAge = ageJohn + ageMark / 2; // Note this is not give correct output due to precedence, like BODMAS

var avgAge = (ageJohn + ageMark) / 2; // () have higher precedence the / devide

console.log(" avgAge => ", avgAge); // avgAge =>  29.5

// associativty : direction in which the operation is execute.
// for multiplication divi : left to right. e.g. 2+2+4+5
// assigment operators work from right to left. e.g. x=y= 2+2; here phele x mein value jygi then y mein jygi then fr x mein y jayega.

var x,y;
x = y = (3 + 5) * 4 - 5; // step 1 : 8*4-6 // step 2 : 32-6 // step 3 : 26 , step 4 : now assignment opertor x = 26

// Note assign x and y varaibles value at the same time, 
/// Note : yahan per x , y se phele araha hai but iska matlab yeh nahi ki x undefined hai y se phele, precedence rule ke sath sath, associativty bhi hoti hai,

console.log(" x => ", x);
console.log(" y => ", y);

// More opertors :

var z = z * 2; 
console.log("z => ", z); // z =>  NaN
// here we repeat z itself at right side. so in js we can also write as :
// var w += 2; // error dega declare phele ho jana chaie

// Note : NaN not a number.

var w;
w *= 2;
console.log("w => ", w); // w =>  NaN

var r = 3;
var r = r * 2; 
console.log("r => ", r); // r =>  6

var s = 3;
s *= 2;
console.log("s => ", s); // s =>  6

var s2 = 3;
s2 += 2; // s2 = s2-2;
console.log("s2 => ", s2); // s2 =>  5

var s3 = 3;
s3 -= 2;  // s3 = s3-2;
console.log("s3 => ", s3); // s3 =>  1

// Increment / decrement opertors:

var m = 0;
m = m + 1; // or m += 1;  // or m++;
console.log("m => ", m); // m =>  1

var n = 0;
n += 1;
console.log("n => ", n); // n =>  1

var p = 0;
p++; // this operator also add 1 unit here
console.log("p => ", p); // p =>  1


// Note : in the same way work for minus , p--;


