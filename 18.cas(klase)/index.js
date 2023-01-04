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

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   fullName() {
//     return console.log(this.name + " " + this.surname);
//   }
// }

// const Vahid = new Person("Vahid", "Gasanin");
// Vahid.fullName();

// create a new class User with data like name, lName, year of birth

class User {
  constructor(name, lName, yearOfBirth) {
    this.name = name;
    this.lName = lName;
    this.yearOfBirth = yearOfBirth;
  }
  HowOldIsUser() {
    let starost = 2022 - this.yearOfBirth;
    return `${this.name} ${this.lName} ima ${starost} godina.`;
  }
}
const Vahid = new User("Vahid", "Gasanin", 2003);
//console.log(Vahid.HowOldIsUser());

class NasledjenaKlasa extends User {
  statesArr = [
    {
      state: "USA",
      cId: "+1",
    },
    {
      state: "Mexico",
      cId: "+52",
    },
    {
      state: "India",
      cId: "+91",
    },
    {
      state: "China",
      cId: "+86",
    },
    {
      state: "Serbia",
      cId: "+381",
    },
  ];

  constructor(street, city, state, phoneNumber) {
    super(Vahid.name, Vahid.lName, Vahid.yearOfBirth);

    this.street = street;
    this.city = city;
    this.state = state;
    this.phoneNumber = phoneNumber;
    this.number = this.getNumber(this.state, this.phoneNumber);
  }

  getNumber(state, phoneNumber) {
    this.findState = this.statesArr.find((el) => el.state === state);
    //console.log(this.findState);
    return phoneNumber.replace(phoneNumber[0], this.findState.cId);
  }

  ispis() {
    this.beautify = {
      name: Neko.name,
      lName: Neko.lName,
      yearOfBirth: Neko.yearOfBirth,
      street: Neko.street,
      state: Neko.state,
      city: Neko.city,
      number: Neko.number,
    };
    return this.beautify;
  }
}

const Neko = new NasledjenaKlasa(
  "Oslobodjenja",
  "Novi Pazar",
  "Serbia",
  "0669754144"
);
//console.log(Neko);

console.log(Neko.ispis());
