//const niz=["Vahid", "Talib", "Ahmed","Imran"];

// console.log(niz.indexOf("vahid"))
//indexOf funckijaa
/*function isImranhere(niz) {
    if(niz.indexOf("Imran")=== -1){
        return "sad ce imran doc"
    }else
    return `Imran se nalazi na ${niz.indexOf("Imran")+1}. mestu`
}
console.log(isImranhere(niz));
*/

//lastindexOf metoda

// function isImranhere(niz) {
//     if(niz.lastindexOf("Imran")=== -1){
//         return "sad ce imran doc"
//     }else
//     return `Imran se nalazi na ${niz.lastindexOf("Imran")+1}. mestu`
// }
// console.log(isImranhere(niz));

//includes metoda
// console.log(niz.includes("Vahid"))-1
// console.log(+"vahid")-NaN
// console.log(typeof(NaN))

// console.log(niz.keys())
// console.log(niz.enteries())
//-------------------------
// const indeksi=niz.keys()

// for(let indeks of indeksi){
//     console.log(indeks)
// }

// const indeksiIvrednost=niz.entries()
// for(let el of indeksiIvrednost){
//     console.log(el)
// }

// const niz=[["jabuke","kruske","mandarine","mango"],
//  ["somun","ruza", "bageta"],
//  ["krompir", "bostan", "luk"]]

// const sredjeniniz=niz.flat();
// console.log(sredjeniniz.sort().reverse())

// Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se jagoda nalazi unutar tog niza. Ako se jagoda
//ne nalazi unutar niza, funkcija neka vrati taj niz poredjan abecedno, s tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalzi.

//---------------------domaciiiiiiiiiiiiiii---------------------------------

var nekafunk = () => {
  str = prompt("Unesite neki tekst");
  niz = str.split(" ");
  //console.log(niz)
  if (niz.includes("jagoda")) {
    console.log(niz.indexOf("jagoda"));
  } else {
    niz.sort().push(100);
    niz.unshift(10);
    console.log(niz);
  }
};
nekafunk();

//---------------------------------------------------------------