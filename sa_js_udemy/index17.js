// L17 - 017_Truthy_and_Falsy_Values_and_Equality_Operators

/*

Truthy_and_Falsy_Values_and_Equality_Operators : 

Falsy values in js : falsy values is a value that is consider is false, when evaluate in if else statement.
and the values that are :
Falsy values : undefined, null, 0, '', NaN. , these values are not false, but when evalaute in if else these values can be consider as false.

truthy values : All the values that are not falsy.
*/

console.log('L17 - 017_Truthy_and_Falsy_Values_and_Equality_Operators');

var height1; // undefined

if(height1) { // undefined is an falsy value
    console.log("variable height1 is defined ",  height1);
} else {
    console.log("variable height1 is not defined ",  height1);
}

var height2; // undefined
if(!height2) { // undefined is an falsy value but reverse opertor used so make it true
    console.log("variable height2 is defined ",  height2);
} else {
    console.log("variable height2 is not defined ",  height2);
}

var height3; // undefined
height3 = 6;
if(height3) { // undefined is an falsy value
    console.log("variable height3 is defined ",  height3);
} else {
    console.log("variable height3 is not defined ",  height3);
}

var height4; 
height4 = 0; // zero 
if(height4) { // zero is a falsy value
    console.log("variable height4 is defined ",  height4);
} else {
    console.log("variable height4 is not defined ",  height4);
}

var height5; 
height5 = 0; // zero 
if(height5 || height5 === 0) { //  first checked varaible exists or variable equal to zero
    console.log("variable height5 is defined ",  height5);
} else {
    console.log("variable height5 is not defined ",  height5);
}

var height6; 
height6 = 'Satty'; // string 
if(height6 || height6 === 0) { //  it is still true bcoz first condition will true, varaible exisits here, first checked varaible exists or variable equal to zero
    console.log("variable height6 is defined ",  height6);
} else {
    console.log("variable height6 is not defined ",  height6);
}

var height7; 
height7 = ''; // empty string 
if(height7 || height7 === 0) { // varaible exists here, first checked varaible exists or variable equal to zero
    console.log("variable height7 is defined ",  height7);
} else {
    console.log("variable height7 is not defined ",  height7);
}

var height8; 
height8 = '';  // empty string 
if(height8 || height8 === '') { // varaible exists here, first checked varaible exists or variable equal to zero
    console.log("variable height8 is defined ",  height8);
} else {
    console.log("variable height8 is not defined ",  height8);
}


// triple 0r double equal to, in triple data type and value both will be matched
// and == opertor does type coercion , means change the data type accordingly


var height9; 
height9 = 23; // type number
if(height9 == '23') { // this == equal too converted this string into the number and then compare
    console.log("variable height9 is defined ",  height9);
} else {
    console.log("variable height9 is not defined ",  height9);
}

var height10; 
height10 = 23; // empty string 
if(height10 === '23') { // strict equallty compare, means these both are two different things or data types, good practise too avoid bugs.
    console.log("variable height10 is defined ",  height10);
} else {
    console.log("variable height10 is not defined ",  height10);
}