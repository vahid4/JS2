// const automobil = {
//   marka: "Audi",
//   model: "Q7",
//   boja: "Bela",
//   pogon: "quattro",
//   menjac: "Automatik",
//   km: 240000,
//   vlasnik: ["062321552", "063930630"],
//   garaza: {
//     parking: "JKP Servis",
//     vikend: "od 17 free",
//     satnaKarta: 50,
//     dnevnaKarta: 200,
//     mesecnaKarta: 2000,
//   },
// };
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
// const abdurahman = "abdurahman";
// const selmanovic = "selmanovic";
// const godine = 14;
// const skola = "bratstvo";

// const person = {
//   abdurahman: abdurahman,
//   selmanovic: selmanovic,
//   godine: godine,
//   skola: skola,
// };

// console.log(person);

// const person2 = {
//   abdurahman,
//   selmanovic,
//   godine,
//   skola,
// };
// console.log(person2);
// //destructuring:

// const automobil={
//     marka:"Audi",
//     model:"Q7",
//     boja:"bela",
// }
// console.log(automobil.model)
// const{ marka, model}=automobil; //destructuring
// console.log(marka,model)

// const godine = [
//   { starost: 19 },
//   { starost: 19 },
//   { starost: 18 },
//   { starost: 16 },
//   { starost: 17 },
// ];

// //Napraviti novi niz (punoletni) koji ce sadrzati one elemente cija je starost veca od 17.

// const punoletni =
//   godine.filter((el) => {
//     return el.starost > 17;
//   })

// console.log(punoletni);

//napraviti niz objekata gde ce svaki objekat sadrzati:
//ime,prezime,starost,bojaOciju,bojaKose,polozenC.
//napraviti funkciju koja pravi novi niz i na kraju ga vraca, koja ce sadrzati one elemente cija boja ociju je braon i koji nisu polozili C.

const niz = [
  {
    ime: "Vahid",
    prezime: "Gasanin",
    starost: 19,
    bojaOciju: "braon",
    bojaKose: "braon",
    polozenC: true,
  },
  {
    ime: "Imran",
    prezime: "Hazirovic",
    starost: 20,
    bojaOciju: "braon",
    bojaKose: "plava",
    polozenC: true,
  },
  {
    ime: "Ahmed",
    prezime: "Krkmisevic",
    starost: 19,
    bojaOciju: "plava",
    bojaKose: "crna",
    polozenC: false,
  },
  {
    ime: "Muhamed",
    prezime: "Krkmisevic",
    starost: 14,
    bojaOciju: "braon",
    bojaKose: "crna",
    polozenC: false,
  },
  {
    ime: "Abdurahman",
    prezime: "Selimovic",
    starost: 16,
    bojaOciju: "braon",
    bojaKose: "crna",
    polozenC: false,
  },
  {
    ime: "Amina",
    prezime: "Besirovic",
    starost: 18,
    bojaOciju: "plava",
    bojaKose: undefined,
    polozenC: true,
  },
  {
    ime: "Amina",
    prezime: "Marovac",
    starost: 19,
    bojaOciju: "braon",
    bojaKose: "braon",
    polozenC: true,
  },
  
   
];
