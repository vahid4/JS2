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

function main(func) {
    console.log("ovo je glavna funkcija.");
   func(59,15,33);
  }
  
  function callBack(arg1,arg2,arg3) {
    let average=+((arg1+arg2+arg3)/3).toFixed(2);
    console.log( `Aritmeticka sredina je ${average}`)
  }
    main(callBack);
//    