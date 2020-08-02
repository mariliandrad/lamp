const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const sky = document.getElementById("sky");
const lamp = document.getElementById("lamp");

btnOn.addEventListener("click", function () {
  lamp.setAttribute("src", "./img/on.svg");
  lamp.setAttribute("alt", "Lâmpada Ligada");
  if (sky.classList.contains("off")) {
    sky.classList.remove("off");
    sky.classList.add("on");
    btnOn.classList.add("active");
    btnOff.classList.remove("active");
  }
});

btnOff.addEventListener("click", function () {
  lamp.setAttribute("src", "./img/off.svg");
  lamp.setAttribute("alt", "Lâmpada Desligada");
  if (sky.classList.contains("on")) {
    sky.classList.remove("on");
    sky.classList.add("off");
    btnOff.classList.add("active");
    btnOn.classList.remove("active");
  }
});
