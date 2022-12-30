// // let i const promenljive obezbedjuju block scope.
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// // promenljive definisane preko VAR keyworda su global scope promenljive
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// const promise = new Promise((resolve, reject) => {
//   resolve();
// });

// promise.then(() => {
//   promise.then(() => console.log(2));
//   console.log(1);
// });

// promise.then(() => {
//   console.log(3);
//   promise.then(() => {
//     console.log(4);
//   });
//   console.log(5);
// });

//--------------------------------------------------

// fetch()
//fetchamo podatke i prikazujemo ih
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     return (imena = data.map((el) => {
//       return el.name;
//     }));
//   })
//   .then((names) => console.log(names))
//   .catch((err) => console.log(err));

//izdvajanje fetchanih podataka
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
};

getPosts().then((arg) => console.log(arg));
