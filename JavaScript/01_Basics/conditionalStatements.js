/* if CONDITION */
let age = 19;
if(age >= 18){
    console.log("You can drive");
}
if(age < 18){
    console.log("You can not drive");
}



//check for color 
let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white";
}

console.log(color);



/* if-else CONDITION */
let age2 = 18;
if (age2 >= 18) {
    console.log("vote");
} else {
    console.log("not vote");
}



//even or odd number 
let num = 18;
if (num % 2 == 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}



/*else-if CONDITION */
let age3 = 19;

if (age3 > 19) {
    console.log("You are adult");
} else if (age3 < 13) {
    console.log("You are child");
} else {
    console.log("You are teenage");
}



//ternary operator 
let age4 = 16;
let result = age4 >= 18 ? "adult" : "not adult";
console.log(result);



/* switch case */
const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound');
        break;
        case 'Mangoes':
            case 'Papayas':
                console.log('Mangoes and papayas are $2.79 a pound');
                 // Expected output: "Mangoes and papayas are $2.79 a pound."
                break;
                default:
                    console.log(`Sorry, we are out of ${expr}`);
}



//Practice 
//Q1 check number multiple or not
let numMul = prompt ("Enter a number");
if (numMul%5 === 0) {
    console.log(numMul,"is multiple of 5");
} else {
    console.log(numMul,"is not multiple of 5");
}



//Q2 check grade according to marks 
let marks = 65;
let grade;

if (marks >= 90 && marks <= 100) {
    grade = "A";
} else if (marks >= 70 && marks < 90) {
    grade = "B";
} else if (marks >= 50 && marks < 70) {
    grade = "C";
} else if (marks >= 40 && marks < 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("According to your score/marks, your grade is:", grade);
