//Q1
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from YT";

//Q2
let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText = "new unique value1";
// divs[1].innerText = "new unique value2";
// divs[2].innerText = "new unique value3";

let idx = 1;
for (div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}
 