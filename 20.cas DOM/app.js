var nekiElement = document.getElementById("nekiElement"); //pristup elementu preko id-a
nekiElement.style.color = "red";
nekiElement.innerText = "Rodjen 25.06.2003";

var ime = document.getElementById("a");
ime.style.backgroundColor = "lightgreen";
ime.style.fontSize = "30px";
ime.innerText = "vahid gasanin"; //upisivanje teksta u neki tag
// addEventListener

//ispis teksta iz prompta
var prazan = document.getElementById("prazan");
//prazan.innerText = prompt("Unesi sta ces da ti napisem(dzabe)");
prazan.innerText = "nestoooo";

//nature image
var slika1 = document.getElementById("nature");
slika1.style.borderRadius = "50%";
slika1.style.width = "300px";
slika1.style.height = "300px";

// na klik slika nestaje i nakon 2 sekunde se pojavljuje
slika1.addEventListener("click", () => {
  slika1.style.display = "none";
  setTimeout(() => {
    slika1.style.display = "block";
  }, 2000);
});

console.log(slika1.getAttribute("src"));

// addEventLIstener je funkcija koja se dodaje elementu koji smo naznacili
// ona prati dogadjanja oko ili unutar naznacenog elementa i izvrsava funkciju koja mu je zadata
// prvi argument funkcije je event(sta treba korisnik da uradi)
// drugi argument je funkcija kojju treba program da obavi

// getAttribute je funkcija koja uzima unete podatke atributa koji se nalaze unutar elementa koji smo naznacili
