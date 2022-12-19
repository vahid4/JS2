// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 1000);

// console.log(4);

// setTimeout(() => {
//   console.log(5);
// }, 950);

// // arr = undefined;
// let arr;
// console.log("Hello World");

// setTimeout(() => {
//   arr = [2, 3156, 51, 354698, 315, 5343];
// }, 1000);

// arr.forEach((el) => {
//   console.log(el);
// });

// function pomocna() {
//   console.log("pomocni posao");
// }

// mojaVar = pomocna;

// mojaVar();

function glavniPosao(arg1) {
  console.log("glavni posao");
  arg1();
}

function pomocniPosao() {
  console.log("pomocni posao");
}

glavniPosao(pomocniPosao);
console.log("++++++++++++++++++++++++++++++");

setTimeout(pomocniPosao, 1000);

console.log("==============================");
