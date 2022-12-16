// function myFunc() {
//   let broj = 4;
//   let predmet = "stolice";
//   return `U prostoriji imamo ${broj} ${predmet}`;
// }
// console.log(myFunc());

// function myFunc() {
//   let broj = 4;
//   let predmet = "stolice";
//   function drugaFunkcija(arg) {
//     console.log(arg + broj);
//   }
//   drugaFunkcija(10);
//   return "To je bio primer closure u JavaScriptu";
// }
// console.log(myFunc());

// function nekaF() {
//   console.log("glavna funckija");
//   function sporednaF() {
//     console.log("sporedna f");
//     return 5;
//   }
//   return sporednaF();
// }
// console.log(nekaF());

//JavaScripts sets
// setovi predstavljaju kolekciju unikatnih vrednosti
// svaka vrednost se pojavljuje samo jednom

// Kreiranje seta:

const letters = new Set(["a", "b", "c", "d", "c"]);
console.log(letters);

// Metode:

// add()-dodaje novi element u setu
letters.add("m");
console.log(letters);

// delete()- brise specifican element u setu
letters.delete("m");
console.log(letters);

// has()- vraca boolean vrednost-da li se element nalazi u setu
console.log(letters.has("m"));

// forEach()-poziva callback funkciju za svaki element
letters.forEach((el) => console.log(el));

//values() vraca iterator sa vrednostima datog seta
console.log(letters.values());
