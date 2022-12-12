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

const userFunctions = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

function createUser(firstName, lastName) {
  const newUser = Object.create(userFunctions);
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  return newUser;
}

const vahid = createUser("Vahid", "Gasanin");
console.log(vahid);
console.log(vahid.fullName());
