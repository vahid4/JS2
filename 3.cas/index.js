// function ispisivanje(n) {
//   console.log(n);
//   if (n - 1 > 0) {
//     ispisivanje(n - 1);
//   }
// }
// ispisivanje(10);

//callback function

// function main(func) {
//   console.log("ovo je kod koji se izvrsava unutar glavne funkcije.");
//  func();
// }

// function callBack() {
//   console.log("pozdrav ljudii ashdajbsdja sdh habsdk kabsdk adjbad a");
// }

// main(callBack);

//------------------------------------

// function main(func) {
//     console.log("ovo je glavna funkcija.");
//    func(59,15,33);
//   }

//   function callBack(arg1,arg2,arg3) {
//     let average=+((arg1+arg2+arg3)/3).toFixed(2);
//     console.log( `Aritmeticka sredina je ${average}`)
//   }
//     main(callBack);
// -------------------------------
//   OBJEKTI

// const car = [{
//   marka: "bmw",
//   godiste: 2003,
//   boja: "braon",
// }];

// console.log(car);

// const osoba={
//     JBMG:2506003710120,
//     ime: "Mutemir",
//     prezime:"Mukipersonalni",
//     mesto:"Hadzet",
//     imeIprezime:function(){
//         return this.ime + " "+ this.prezime
//     }
// }
// console.log(osoba.imeIprezime());

//napraviti objekat student koji ce da ima vrednosti po zelji, svojstava ime,prezime,broj indeksa,
//ocene(niz svih ocena koje student ima u trenutnoj godini), prosek ocena funkcija koja na osnovu niza,
//ocene vraca prosek datih ocena

const student = {
  ime: "Vahid",
  prezime: "Gasanin",
  broj_indeksa: "035030",
  ocene: [6, 9, 8, 6, 7, 6, 9, 9],
  prosek: function () {
    let zbir = 0;
    for (let i = 0; i < this.ocene.length; i++) {
      zbir += this.ocene[i];
    }
    let prosecna = zbir / this.ocene.length;
    console.log(
      `Prosecna ocena studenta ${this.ime + " " + this.prezime} je ${prosecna}.`
    );
    // drugi nacin------------------------------
    //  const brojOcena=this.ocene.length;
    //  const suma=this.ocene.reduce((previousValue, currentValue)=>previousValue+currentValue)
    //  const prosek=suma/brojOcena;
    //  console.log(prosek)
  },
};
//console.log(student.broj_indeksa)
student.prosek();

