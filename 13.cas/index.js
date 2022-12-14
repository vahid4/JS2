// const person = {
//   firstName: "Muhamed",
//   lastName: "Krkmisevic",
// };

// person.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// console.log(person);

// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// const talib = new User("Talib", "Dolovac");
// console.log(talib);

// User.prototype.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// console.log(talib.fullName());

// 2. opcija je preko funkcije na sledeci nacin:

//unutar objekta userFunctions stavljamo sve metode koje zelino dodati
//u objekte napravljene na sledeci nacin

// const userFunctions = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// function createUser(firstName, lastName) {
//   const newUser = Object.create(userFunctions);
//   newUser.firstName = firstName;
//   newUser.lastName = lastName;
//   return newUser;
// }

// const vahid = createUser("Vahid", "Gasanin");
// console.log(vahid);
// console.log(vahid.fullName());

str1 = "PERA";
str = "sladoled";

function kombinacija(A, B) {
  const duzina = A.length > B.length ? A.length : B.length;

  let C = "";
  for (let i = 0; i <= duzina - 1; i++) {
    if (A[i] !== undefined && B[i] !== undefined) {
      C += A[i] + B[i];
    } else if (A[i] == undefined) {
      C += B[i];
    } else C += A[i];
  }
  return C;
}

console.log(kombinacija(str1, str));
console.log(kombinacija("OVO JE DUZI STRING", str));
console.log(7);
