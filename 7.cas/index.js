const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: 50,
    dnevnaKarta: 200,
    mesecnaKarta: 2000,
  },
};
//napraviti funkciju koja ce promeniti vrednost satne dnevne i mesecne karte za po 20%
//za bilo koji objekat koji ima properties: satnaKarta,dnevnaKarta,mesecnaKarta.

// function povecaj() {
//     this.satnaKarta+=this.satnaKarta*0.2;
//     this.dnevnaKarta+=this.dnevnaKarta*0.2;
//     this.mesecnaKarta+=this.mesecnaKarta*0.2;
//     //return `Nove cene su: satna karta ${this.satnaKarta} rsd, dnevna karta ${this.dnevnaKarta} rsd i mesecna karta ${this.mesecnaKarta} rsd.`
//     return {
//         satnaKarta:this.satnaKarta,
//         dnevnaKarta:this.dnevnaKarta,
//         mesecnaKarta:this.mesecnaKarta,
//     }

// }

// console.log(povecaj.call(automobil.garaza))
const abdurahman = "abdurahman";
const selmanovic = "selmanovic";
const godine = 14;
const skola = "bratstvo";

const person = {
  abdurahman: abdurahman,
  selmanovic: selmanovic,
  godine: godine,
  skola: skola,
};

console.log(person);

const person2 = {
  abdurahman,
  selmanovic,
  godine,
  skola,
};
console.log(person2);
