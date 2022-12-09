var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function sortirajPoTitlu(par) {
  const novi = par.map((el) => {
    return el.title;
  });
  novi.sort();
  const novi2 = [];
  for (let i = 0; i < par.length; i++) {
    if (
      par.find((element) => {
        return element.title === novi[i];
      })
    ) {
      novi2.push(
        par.find((element) => {
          return element.title === novi[i];
        })
      );
    }
  }
  return novi2;
}

console.log(sortirajPoTitlu(library));

// niz = ["a", "v", "c", "P"];
// niz2 = [1, 2, 3, 96, -63];
// console.log(niz.sort());
// console.log(niz2.sort());
