/* Arrays */
//arrays is mutable
let marks = [1, 2, 3, 4];
console.log(marks);
console.log(marks.length);
console.log(marks[2]);



//looping of array
let fruits = ["apple", "banana", "orange", "mango"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}



let cities = ["Delhi", "Noida", "Gurugram", "Mumbai", "Bangaluru", "Hyderabad"];
for(let city of cities){
    console.log(city.toUpperCase());
}



/* array methods */
let cities2 = ["Noida", "Delhi", "Mumbai"];
cities2.push("Gurugram", "Bangaluru");2
console.log(cities2);



let deletedCity = cities2.pop();
console.log(cities2);
console.log("deleted", deletedCity); //deleted bangaluru 



//convert array to string
let newCities = ["Noida", "Delhi", "Lucknow"];
let newMarks = [45, 75, 35, 78];
console.log(newCities.toString());
console.log(newMarks.toString());



//concatination
let marvelHeroes = ["thor", "ironman", "hulk"];
let dcheros = ["superman", "batman"];

let heros = marvelHeroes.concat(dcheros);
console.log(heros);



//Q1 find avarage marks of the class
/*
let marksClass = [85, 97, 44, 37, 76, 60];

let sum = 0;
for (let val of marksClass) {
    sum = sum + val;
}
let avg = sum / marksClass.length;
console.log("sum of marks:", sum);
console.log(`avarage marks of the class = ${avg}`);
*/



//Q2 practice
/* 
let items = [250, 645, 300, 900, 50];
let i = 0;
for(let val of items){
    let offer = val / 10;
    items[i] -= offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
} 
*/

// for(let i=0; i<items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);



//Q3 practice
/*
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift(); //remove first company
// companies.splice(2, 1, "Ola"); //remove uber and add ola in its place
// companies.push("Amazon"); //add amazon at the end 
console.log(companies);
*/