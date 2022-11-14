const person = {
  JMBG: 1404003783933,
  ime: "Ahmed",
  prezime: "Tutic",
};

// const x=person
// x.ime="Muhamed"
// console.log(x)
// console.log(person)
//-------------------------
// delete person.JMBG;
// console.log(person);
// delete brise cio par i property i value

// const a=JSON.stringify(person)
// // console.log(a)
// //stringify pretvara objekat u JSON string
// const b=JSON.parse(a)
// console.log(b)
// //parse pretvara iz stringa u objekat

// niz=["ahmed", "vahid"]
// console.log(niz.join(" "))
// const a=JSON.stringify(niz);
// console.log(a)

// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),

//-----Domaci--------------------------------------------
const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
  trenutnaBrzina: 0,
  maksimalnaBrzina: 260,
  povecanjeBrzine:function (p) {
    
      
      if (p<=260) {
        this.trenutnaBrzina+=p;
        console.log( `Vasa brzina je ${this.trenutnaBrzina}km/h.`)
      }else
      console.log(`Ne mozete ici ${p}km/h jer je vasa maximalna brzina 260km/h`)
      },
  
smanjenjeBrzine:function(s) {
  
  if (this.trenutnaBrzina>=s) {
    this.trenutnaBrzina-=s;
    console.log( `Vasa brzina je ${this.trenutnaBrzina}km/h.`)
  }else
  console.log(`Ne mozete ici ${s}km/h jer je vasa minimalna brzina 0km/h`)
  }
  
}
    
myCar.povecanjeBrzine(200)
myCar.smanjenjeBrzine(30)
console.log(myCar.trenutnaBrzina)

