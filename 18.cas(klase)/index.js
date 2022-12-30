// Node je runtime koji vrsi egzekuciju i kompajlovanje javascript koda
// Node ima mnostvo svojih modula, najpoznatiji su fs(fileSystem) i http modul

// class Car {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   fullName() {
//     return console.log(this.name + " " + this.type);
//   }
// }

// const newCar = new Car("audi", "Limo");
// console.log(newCar);
// newCar.fullName();

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  fullName() {
    return console.log(this.name + " " + this.surname);
  }
}

const Vahid = new Person("Vahid", "Gasanin");
Vahid.fullName();
