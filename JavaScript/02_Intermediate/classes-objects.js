/*Classes & Objects*/
const student = {
    fullName: "Saif Ullah",
    marks: 94.4,
    printMarks: function () {
        console.log("marks = ", this.printMarks);
    },
};



const employee = {  //object
    calTax() {   //function
        console.log("tax rate is 10%");
    },
};
const karan = {
    salary: 50000,
    calTax() {
        console.log("tax rate is 20%");
    },
};
karan.__proto__ = employee; //prototype

karan.calTax(); //will print for karan



//consider it as an example 
class toyotaCar {
    start() {
        console.log("start...");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new toyotaCar();
fortuner.setBrand("fortuner");
fortuner.start();

let lexus = new toyotaCar();
lexus.setBrand("lexus");
lexus.stop();

























/*
class toyotaCar {
    constructor(brand, mileage) {
        console.log("creating new onject");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new toyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new toyotaCar("lexus", 12);
console.log(lexus);
*/









/*
//Inheritance 
// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();

class Person {
    constructor() {
        this.species = "homo sepiens";
    }
    
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {  //work is here same method.   same methods that's why called overriding
        console.log("do nothing");
    }
}

class Engineer extends Person{
    work() {
        console.log("solve problems, build something");
    }
}

class Docter extends Person{
    work() {
        console.log("treat patients");
    }
}

let saifuObj = new Engineer();
*/









/*
//super key word 
class Person {
    constructor() {
        console.log("enter parent constructor");
        this.species = "homo sepiens";
        this.name = "name";
    }
    
    eat() {
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(name) {
        super(name);    //to invoke parent class constructor
    }
    work() {
        super.eat();
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer("Saifu");
*/








/*
//practice
let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email){
        super(name,email);
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("raj", "raj@email.com");
let student2 = new User("rahul", "rahul@email.com");

let admin = new Admin("admin", "admin@email.com");
*/