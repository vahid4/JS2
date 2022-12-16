// JavaScripts maps
// Mape sadrze key-value parove gde kljucevi mogu biti bilo koji tip podatka
// Mape pamte originalni redosled elemenata

// Kreiranje mape

const fruits = new Map([
  ["apples", 60],
  ["banane", 150],
  ["jagoda", 320],
  ["mango", 440],
]);
console.log(fruits);

// Metode:

// set()-podesava vrednost za odredjeni kljuc u mapi
fruits.set("pear", 40);
console.log(fruits);

// get() - vraca nam vrednost za odredjeni kljuc
console.log(fruits.get("banane"));

// delete()- brise ceo element sladnjem njegovog kljuca
fruits.delete("mango");
console.log(fruits);

// has()-vraca boolean-ispituje ima li zadati element u mapi
console.log(fruits.has("jagoda"));

// forEach()- poziva callback funkciju  za svaki key-value par
fruits.forEach((el, key) => {
  console.log(el + " rsd", key);
});
