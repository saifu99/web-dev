/** Premitive - Number, string, Boolean, Undefined, Null, BigInt, Symbol */
let age = 29;
let name = "Saifu";
isFollow = true; 
let y = undefined;
let x = null;
let x2 = BigInt("123");
let y2 = Symbol("Hello")

console.log(x2);



const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};

student["age"] = student["age"] + 1;
console.log(student.age);
console.log(student["cgpa"]);



//Practice 
const profile = {
    username: "saifu",
    isFollow: false,
    followers: 99,
    following: 1,
};
console.log(typeof profile["isFollow"]);