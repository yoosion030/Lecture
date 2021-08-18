const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

function SubmitClick(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginForm.classList.add("hidden");
    console.log(username);
    greeting.innerText = `Hello ${username}`;// "Hello " + username;
    greeting.classList.remove("hidden");
}
loginForm.addEventListener("submit",SubmitClick);
