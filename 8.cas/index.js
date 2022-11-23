const person = {
  ime: "Abdurahman",
  prezime: "Selimovic",
  starost: 16,
  bojaOciju: "braon",
  bojaKose: "crna",
  polozenC: false,
};
const person2=person;

const osoba = {
    ime: "Abdurahman",
    prezime: "Selimovic",
    starost: 16,
    bojaOciju: "braon",
    bojaKose: "crna",
    polozenC: false,
  };

//freeze() metoda cini objekat immutable(onemogucava promene na njemu).
// Object.freeze(person)
// person.ime="Vahid"
// console.log(person)

//-----------------------------------------------------------

//seal() metoda dozvoljava promene vrednosti svojstava, ali ne dozvoljava dodavanje novih ili brisanje.
// Object.seal(person);
// delete person.ime;
// console.log(person);


  //values() metoda vraca niz vrednosti datog objekta
//   const vrednosti=Object.values(person)
//   console.log(vrednosti)

  //keys() metoda vraca niz kljuceva datog objekta
//   const vrednosti=Object.keys(person)
//   console.log(vrednosti)

//entries() metoda vraca niz nizova(svaki podniz je name:value par)
// const vrednosti=Object.entries(person)
//   console.log(vrednosti)
//   console.log(vrednosti.flat())

// is() ispituje identicku jednakost
console.log(Object.is(person, person2))
console.log(Object.is(person, osoba))