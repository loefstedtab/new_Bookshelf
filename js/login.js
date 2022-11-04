// -----------------------------
// #region login
// -----------------------------

const loginForm = document.querySelector("#loginForm");
const loginButton = document.querySelector("#loginButton");
const errorMsg = document.querySelector("#errorMsg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

  if (username && password){
    window.location.replace("index.html")
  } else {
    errorMsg.style.display = "block"}
})


//-----------------------------
//#endregion login
//-----------------------------
