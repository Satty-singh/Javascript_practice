// L19 - 019_Coding_Challenge_2_Solution

/*

*/


console.log("L19 - 019_Coding_Challenge_2_Solution")

var scoreJohn = (89 + 120 + 130) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMarry = (97 + 105 + 134) / 3;

console.log(" scoreJohn => ", scoreJohn);
console.log(" scoreMike => ", scoreMike);
console.log(" scoreMike => ", scoreMike);

if (scoreJohn > scoreMike) {
   console.log("John\'s team wins with " + scoreJohn + ' points');
} else if (scoreJohn > scoreMike) {
    console.log("Mike\'s team wins with " + scoreMike + ' points');
} else {
    // suppose if john score is not greater than mike and mike score is not greater then john that means both have same score.
    console.log("There is a draw");
}