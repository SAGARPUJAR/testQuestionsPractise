const btnCheck = document.querySelector("#btnCheck");
const password = document.querySelector("#data");

function validatePassword() {
  if (password.value != "") {
    var Plength = password.value.length;
    if (Plength < 10) {
      alert(
        "OOP's, Please Enter password which contains more than 10 Chracters"
      );
    } else {
      alert("Yay !! Your Password is Good !!");
    }
  } else {
    alert("Please Enter Password");
  }
}

function EnableDisable(password) {
  if (password.value.trim() != "") {
    var Plength = password.value.length;
    if (Plength < 10) {
      btnCheck.disabled = true;
      password.style.color = "red";
    } else {
      password.style.color = "green";
      btnCheck.disabled = false;
    }
  }
}

btnCheck.addEventListener("click", validatePassword);
