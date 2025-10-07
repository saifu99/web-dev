/* Promises */
let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
  reject("error occurred"); //print an error
});



//Example2: function returning a promise
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise inside function");
    // resolve("success");
    reject("network error");
  });
};

let promise2 = getPromise();
promise2.then((res) => {
  console.log("promise fulfilled", res);
});
promise2.catch((err) => {
  console.log("rejected", err); // print rejected network error
});



//Example3: simulating async data fetching (callback replaced by promise)
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    //print success
    console.log(res);
  });



//Example4: sequential async calls (cleaner chaining)
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 2000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 2000);
  });
}

console.log("fetching data1...");
asyncFunc1().then((res) => {
  console.log("fetching data2...");
  asyncFunc2().then((res) => {});
});



//Promise Chain (solves callback hell)
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}
//Promise Chain
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    console.log(res); //print success 
  });
