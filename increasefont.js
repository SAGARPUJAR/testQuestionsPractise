const btnInc = document.querySelector("#incr");
const btnDec = document.querySelector("#decr");
const content = document.querySelector("#data");
const output = document.querySelector("#output");
var count = 5;

function IncreasePixel() {
  if (content.value != "") {
    count += 2;
    content.style.fontSize = parseInt(count) + "px";
    output.innerText = `Font Size Increased by ${parseInt(count)}px`;
  } else alert("Please Enter Input");
}

function DecreasePixel() {
  if (content.value != "") {
    count -= 2;
    if (count != 0) {
      content.style.fontSize = parseInt(count) + "px";
      output.innerText = `Font Size Decreased by ${count}px`;
    }
  } else alert("Please Enter Input");
}

btnInc.addEventListener("click", IncreasePixel);

btnDec.addEventListener("click", DecreasePixel);
