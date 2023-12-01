const signUpEl = document.getElementById("signUp");
const loginEl = document.getElementById("login");
const form1El = document.getElementById("form1");
const form2El = document.getElementById("form2");

signUpEl.addEventListener("click", () => {
  form1El.style.display = "none";
  form2El.style.display = "block";
});

loginEl.onclick = () => {
  form1El.style.display = "block";
  form2El.style.display = "none";
};
