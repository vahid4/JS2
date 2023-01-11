var pozadina = document.getElementById("random");
var promeniPozadinu = document.getElementById("bojaPozadine");
promeniPozadinu.addEventListener("click", () => {
  pozadina.style.backgroundColor = "red";
});

var naslov = document.getElementById("naslov");
var promeniNaslov = document.getElementById("promeniNaslov");
promeniNaslov.addEventListener("click", () => {
  naslov.style.color = "blue";
});

var paragraf = document.getElementById("nekop");
var promeniP = document.getElementById("promenip");
promeniP.addEventListener("click", () => {
  paragraf.innerText = "nesto bilo staaaaa";
});
// provali sto ne radi
