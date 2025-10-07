/* Functions */ 
function myFunction() {
    console.log("We are learning JS from YT.");
}
myFunction();
myFunction();



function newFunction(msg){
    //parameter -> input
    console.log(msg);
}
newFunction("I love JS"); //argument



//function for sum of 2 numbers
function sum(x, y){
    console.log(x + y); //call the function and pass the value of x & y inside it
}



//return function
function sum2(x, y){
    s = x+y;
    return s;
}

// let val = sum(3, 4);
// console.log(val);



/* Arrow function */
//arrow func for sum
function sum3(a, b){
    return a+b;
}



const arrowSum = (a, b) => {
    console.log(a+b);
};




//arrow func for multiplication
function mul(a, b){
    return a*b;
}



const arrowMul = (a, b) => {
    console.log(a*b);
};



let val2 = sum(3, 4);
console.log(val2);



const printHello = () => {
    console.log("Hello");
};





//forEach loop in Arrays 
//for each loop is a method
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val) {
    console.log(val);
});
 
arr.forEach((val) => {
    console.log(val);
});



let array = ["pune", "delhi", "mumbai"];
array.forEach((val, idx, array) => {
    console.log(val.toUpperCase(), idx, array);
});



/* Map method */
let numsMap = [67, 52, 39];
let newArr = numsMap.map((val) => {
    return val * 2;
});
console.log("new array:", newArr);



//call the calcSquare function 
let calcSquare = (num) => {
    console.log("num*num:",num*num);
};



//Filter method
let arrFilter = [1,2,3,4,5,6,7];
let evenArr = arrFilter.filter((val) => {
    return val%2 === 0;
});
console.log(evenArr);



//Reduce method
let arrReduce = [1, 2, 3, 4];
const output = arrReduce.reduce((prev, curr) => {
    // return prev+curr; //10
    return prev > curr ? prev : curr;
});
console.log(output); 



/*
//Q1 use function & return number of vowels in String
function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Saifu"));
*/



/*
//Q2 create arrow function to perform the same task in Q1
const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
} 
console.log(countVow("Saifu"));
*/



/*
//Q3 print the square of each number using forEach loop
let nums = [2, 3, 4, 5, 6];
nums.forEach((nums) =>{
    console.log(nums*nums);
});

let sqrt = (num) => {
    console.log(num*num);
};
nums.forEach(sqrt);
*/



/*
//Q4 filter out marks of students that scored 90+
let marks = [97, 64, 32, 49, 99, 96, 86];
let toppres = marks.filter((val) => {
    return val > 90;
});
console.log(toppres);
*/



/*
//Q5 take input from user. Create array 1 to n
let n = prompt("Enter a number: ");
let userArray = [];
for(let i=1; i<=n; i++){
    userArray[i-1] = i;
}
console.log(userArray); 

let sumUser = userArray.reduce((res, curr) => {
    return res+curr;
});
console.log("sum of all array value:",sumUser);



let factorial = userArray.reduce((res, curr) => {  //multiplication or factorial
    return res*curr;
});
console.log("factorial of all the value:", factorial);
*/