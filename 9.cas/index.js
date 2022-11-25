//napraviti funkciju koja nam vraca novi niz koji nema duplikata
niz = [5, "nesto", 3, 9, 3, "nesto"];

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
