// function myFunc() {
//   let broj = 4;
//   let predmet = "stolice";
//   return `U prostoriji imamo ${broj} ${predmet}`;
// }
// console.log(myFunc());

function myFunc() {
  let broj = 4;
  let predmet = "stolice";
  function drugaFunkcija(arg) {
    console.log(arg + 5);
  }
  drugaFunkcija(6);
  return "To je bio primer closure u JavaScriptu";
}
console.log(myFunc());
