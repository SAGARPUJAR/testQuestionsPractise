const btnR = document.querySelector("#red");
const btnG = document.querySelector("#green");
const btnB = document.querySelector("#blue");
const data = document.querySelector("#data");

function changetoRed() {
  if (data.value.trim() != "") {
    data.style.color = "red";
  } else {
    data.style.color = "black";
    alert("please select input");
  }
}

function changetoGreen() {
  if (data.value.trim() != "") {
    data.style.color = "green";
  } else {
    data.style.color = "black";
    alert("please select input");
  }
}

function changetoBlue() {
  if (data.value.trim() != "") {
    
    data.style.color = "blue";
  } else {
    data.style.color = "black";
    alert("please select input");
  }
}

btnR.addEventListener("click", changetoRed);
btnG.addEventListener("click", changetoGreen);
btnB.addEventListener("click", changetoBlue);
