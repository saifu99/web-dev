// const URL = "https://catfact.ninja/fact";

// let promise = fetch(URL);
// console.log(promise);


const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[0];
};
btn.addEventLisener("click", getFacts);

/*
async function getUserData() {
    try {
        const response = await fetch("https://api.github.com/users/octocat");
        const data = await response.json();
        console.log("User Data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}
getUserData();
*/
