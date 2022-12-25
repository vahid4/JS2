// // let i const promenljive obezbedjuju block scope.
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// // promenljive definisane preko VAR keyworda su global scope promenljive
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

const promise = new Promise((resolve, reject) => {
  resolve();
});

promise.then(() => {
  promise.then(() => console.log(2));
  console.log(1);
});

promise.then(() => {
  console.log(3);
});
