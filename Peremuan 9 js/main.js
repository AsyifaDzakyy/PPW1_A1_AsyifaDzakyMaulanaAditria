x = "PPW";
console.log(x);
document.write();
alert("saya mau belajar js");

function salam() {
  document.write("salah");
}
function externalFunction() {
  alert("Halo dari Eksternal JavaScript!");
}

document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.createElement("button");
  button.innerHTML = "Klik Saya (Eksternal JS)";
  button.onclick = externalFunction;
  document.body.appendChild(button);
});
