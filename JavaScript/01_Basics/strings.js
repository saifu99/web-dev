/* Strings */
let str = "Saifu";
console.log(str[2]);  


let obj = {
    item: "pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;   //called interpolation 
console.log(output);



//Template literals
let specialString = `This is a template literal`;
console.log(typeof specialString); //will print string 



//escape character
let str2 = "Java\tScript";  //11
console.log(str2.length);



//String methods
let str3 = "Saifu";
str3 = str3.toUpperCase();
console.log(str3);



let str4 = "ilovejs";
console.log(str4.charAt(3));



//Practice 
// let fullName = prompt("Enter your full name: ");

// let string = fullName;
// console.log("@" + fullName + string.length);



