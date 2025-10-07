//async await >> promise chains >> callback hell
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
}, 2000);

console.log("three");
console.log("four");



/* Callbacks */
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId); //print after 2 seconds 
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

//Callback Hell 
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});


