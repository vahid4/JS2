//napraviti funkciju koja nam vraca novi niz koji nema duplikata
// niz = [5, "nesto", 3, 9, 3, "nesto"];

// const skloniDuplikat = (arr) => {
//   novi = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!novi.includes(arr[i])) {
//       novi.push(arr[i]);
//     }
//   }
//   return novi;
// };
// console.log(skloniDuplikat(niz));

//ovo ispod ne radi
// const skloniDuplikat = (arr) => {
//   let novi = [];
//   novi = arr.filter((el) => {
//     !novi.includes(el);
//   });
//   return novi;
// };
// console.log(skloniDuplikat(niz));

// ... spread operator nam sluzi za kopiranje svih elemenata niza ili objekta u drugi niz ili objekat
// niz = [5, "nesto", 3, 9, 3, "nesto"];
// niz2 = [...niz];
// //console.log(niz2);
// niz3 = [...niz, ...niz2];
// console.log(niz3);
// niz4 = [15, ...niz2, 2];
// console.log(niz4);

// const obj = {
//   ime: "Muha",
//   prezime: "HAzirovic",
//   starost: 17,
// };

// const noviObj = {
//   ...obj,
//   bojaKOse: "crna",
//   kovrdzav: false,
// };

// console.log(noviObj);
