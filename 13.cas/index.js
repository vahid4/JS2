const person = {
  firstName: "Muhamed",
  lastName: "Krkmisevic",
};

person.fullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person);

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const talib = new User("Talib", "Dolovac");
console.log(talib);

User.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(talib.fullName());
