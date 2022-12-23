// console.log(1);
// console.log(2);
// setTimeout(() => console.log(3), 1000, 1);
// console.log(4);
// setTimeout(() => console.log(5), 1000);

// Promise je JavaScript objekat koji predstavlja mesto za rezultate
// asihrone funkcije sve dok traje izvrsavanje asihrone operacije
//--------------------------------------------------------------------------
// const imatiCas = new Promise((resolve, reject) => {
//   const response = 2000;
//   if (response === 200) {
//     resolve();
//   } else reject();
// });

// imatiCas
//   .then(() => console.log("desio se RESOLVE.Imali smo cas"))
//   .catch(() => console.log("desio se REJECT.Nismo imali smo cas"))
//   .finally(() => console.log("Poruka se ispisuje u svakom slucaju"));
//----------------------------------------------------------------------------
// then() se izvrsava u slucaju da se desi resolve();
// catch() se izvrsava u slucaju da se desi reject();
// finally() se izvrsava u svakom slucaju;

// ispisati poruku da li je dobije  niz ili ne

const isArray = new Promise((res, rej) => {
  const response = 200;

  if (response === 200) {
    res([10, 12, 15, 1999]);
  } else rej();
});

isArray
  .then((arg1) => {
    console.log("Jeste NIZ");
    const parni = arg1.filter((el) => {
      return el % 2 == 0;
    });
    return parni;
  })
  .then((parniElementi) => console.log(parniElementi))
  .catch(() => console.log("Nije niz"));
