const person = {
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
  const vrednosti=Object.keys(person)
  console.log(vrednosti)