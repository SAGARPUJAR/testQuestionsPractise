const btnh1 = document.querySelector("#btnh1");
const btnh2 = document.querySelector("#btnh2");
const btnh3 = document.querySelector("#btnh3");
const txt_value = document.querySelector("#value");
const Ptag = document.querySelector("#changetext");

function chnageh1() {
  Ptag.innerHTML = "<h1>" + txt_value.value + "</h1>";
}
function chnageh2() {
  Ptag.innerHTML = "<h2>" + txt_value.value + "</h2>";
}

function chnageh3() {
  Ptag.innerHTML = "<h3>" + txt_value.value + "</h3>";
}
btnh1.addEventListener("click", chnageh1);
btnh2.addEventListener("click", chnageh2);
btnh3.addEventListener("click", chnageh3);
