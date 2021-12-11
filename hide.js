const btnHide = document.querySelector("#btnLoaded");
const btnReload = document.querySelector("#btnReload");
const loading = document.querySelector("h2");

function HideData() {
  loading.style.display = "none";
}

function ReloadData() {
  loading.style.display = "block";
}

btnHide.addEventListener("click", HideData);
btnReload.addEventListener("click", ReloadData);
