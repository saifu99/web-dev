/* for loop */
for (let count = 1; count <= 10; count++) {
    console.log("For loop");
}



//calculate sum 
let sum=0;
let n=10;

for(let i=1; i<=n; i++){
    sum = sum+i;
}
console.log("sum: ", sum);



/* while loop */
let i=1;
while(i<=10){
    console.log("i =",i);
    i++;
}



/* do while loop */
let a=10;
do{
    console.log("do while loop");
    a++;
} while (a<=5);



/* for-of loop */
let str = "Saifu";
for(let val of str){   //iterator
    console.log("val =",val);
}



/* for-in loop */
let student = {
    name: "Saifu",
    age: 17,
    cgpa: 7,
    isPass: true,
};

for(let key in student) {
    console.log(key); //will print name, age, cgpa, isPass
}





//Q1 print even numbers 0 to 100
/*
for(let num=0; num<=100; num++){
    if(num%2 == 0){
        console.log(num);
    }
}
*/



//Q2 guess number game
/*
let gameNum = 25;
let userNum = prompt("Guess the game number: ");

while (userNum != gameNum){
    userNum = prompt ("You entered wrong number. Guess again: ")
}
console.log("Congratulations! you entered the correct number")
*/