const val1 = document.querySelector("#input1");
const val2 = document.querySelector("#input2");
const btnAdd = document.querySelector("#add");
const btnSub = document.querySelector("#sub");
const btnMul = document.querySelector("#mul");
const btnDiv = document.querySelector("#divi");
const output1 = document.querySelector("#output");
const btnreset = document.querySelector("#rest");

function AddNumber() {
  var value1 = Number(val1.value);
  var value2 = Number(val2.value);
  if (value1 != "" && value2 != "") {
    output1.innerText = `addition of ${value1} and ${value2} is : ${
      value1 + value2
    }`;
  } else {
    alert("Please Select input");
  }
}

function SubNumber() {
  var value1 = Number(val1.value);
  var value2 = Number(val2.value);
  if (value1 != "" && value2 != "") {
    output1.innerText = `Subtraction of ${value1} and ${value2} is : ${
      value1 - value2
    }`;
  } else {
    alert("Please Select input");
  }
}

function MulNumber() {
  var value1 = Number(val1.value);
  var value2 = Number(val2.value);
  if (value1 != "" && value2 != "") {
    output1.innerText = `Multiplication of ${value1} and ${value2} is : ${
      value1 * value2
    }`;
  } else {
    alert("Please Select input");
  }
}

function DiviNumber() {
  var value1 = Number(val1.value);
  var value2 = Number(val2.value);
  if (value1 != "" && value2 != "") {
    output1.innerText = `division of ${value1} and ${value2} is : ${
      value1 / value2
    }`;
  } else {
    alert("Please Select input");
  }
}

function Clear() {
  val1.value = "";
  val2.value = "";
}

btnAdd.addEventListener("click", AddNumber);
btnSub.addEventListener("click", SubNumber);
btnMul.addEventListener("click", MulNumber);
btnDiv.addEventListener("click", DiviNumber);

btnreset.addEventListener("click", Clear);
