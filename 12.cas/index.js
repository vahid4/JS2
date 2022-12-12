// var library = [
//   { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
//   { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     libraryID: 3245,
//   },
// ];

// function sortirajPoTitlu(par) {
//   const novi = par.map((el) => {
//     return el.title;
//   });
//   novi.sort();
//   const novi2 = [];
//   for (let i = 0; i < par.length; i++) {
//     if (
//       par.find((element) => {
//         return element.title === novi[i];
//       })
//     ) {
//       novi2.push(
//         par.find((element) => {
//           return element.title === novi[i];
//         })
//       );
//     }
//   }
//   return novi2;
// }

//console.log(sortirajPoTitlu(library));
//---------------------------------------------
// niz = ["a", "v", "c", "P"];
// niz2 = [1, 2, 3, 96, -63];
// console.log(niz.sort());
// console.log(niz2.sort());
//---------------------------------------------------

//iz 2 poslata niza vratiti 3. niz koji ce sadrzati elemente iz oba niza koji nizu sadrzani u drugom nizu

// function treciNiz(prvi, drugi) {
//   const noviNiz1 = prvi.filter((element) => !drugi.includes(element));
//   const noviNiz2 = drugi.filter((element) => !prvi.includes(element));
//   return [...noviNiz1, ...noviNiz2];
// }

// console.log(treciNiz([1, 2, 3, 4], [3, 4, 5, 6]));

// const person = {
//   firstName: "Imran",
//   lastName: "Hazirovic",
// };

// console.log(person);

//svi objekti u JavaScriptu su povezani sa nekim prototip-objektom, tako da mozemo reci da svaki objekat ima protip.
//Prototip je objekat koji sadrzi svojstva i metode.

//  2 nacina pravljenja sablona za objekte:

// 1. nacin: Constructor function(Konstruktor funkcija):
// function User(firstName, lastName, score) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.score = score;
// }
// User.prototype.incrementscore = function () {
//   this.score += 1;
// };

// const imran = new User("imranum", "hazirovic", 130);
// console.log(imran);
// imran.incrementscore();
// console.log(imran);

// const vahid = new User("Vahid", "Gasanin", 2);
// vahid.incrementscore();
// console.log(vahid);

function napraviAuto(marka, boja, godinaProizvodnje, udaran) {
  this.marka = marka;
  this.boja = boja;
  this.godinaProizvodnje = godinaProizvodnje;
  this.udaran = udaran;
}

napraviAuto.prototype.sigurnoLupan = function () {
  this.udaran = true;
};

const peglica = new napraviAuto("fiat", "crvena", 1986, false);
console.log(peglica);
peglica.sigurnoLupan();
console.log(peglica);
console.log(7);
