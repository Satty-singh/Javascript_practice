// L15 - 015_Boolean_Logic

/*

Boolean_Logic : Not, AND, OR , there are many logical operators.

AND (&&) : true if ALL are true, and in all other cases result will be false and same apply more than two variable.
OR (||) : true if ONE is true, and in all other cases result will be false and same apply more than two variable.

NOT (!) : inverts true/false value

var age = 16;
age >= 20; // false
age < 30; // true
!(age < 30) // false

        f && t
age >= 20 && age < 30; // false
        f || t
age >= 20 || age < 30; // true

// logical opertor has lower precedence
*/

console.log("L15 - 015_Boolean_Logic")

// lets check teenager or not

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy. ');
} else if (age >= 13 && age < 20) { // between 13 and 20 -- How we can write this ? , age is greater and equal to 13 AND the same time it also less then 20. 
    console.log(firstName + ' is a teenager. ');
} else if (age >= 20 && age < 30) { // between 20 to 30 -- 
    console.log(firstName + ' is a young men. ');
}else {
    console.log(firstName + ' is a men. ');
}

// Note : we can also put if else inside the if or else alone.

