const sub = document.querySelector(".loginbtn");
const login = document.querySelector(".login");
const main = document.querySelector(".main");
const logout = document.querySelector(".logout");

//Event Listener
sub.addEventListener("click", (e) => {
  e.preventDefault();
  main.classList.remove("close");
  login.classList.add("close");
});

logout.addEventListener("click", (e) => {
  e.preventDefault();
  main.classList.add("close");
  login.classList.remove("close");
});
