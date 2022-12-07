const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  const objectWithName = contacts.find((el) => {
    return el.firstName === name;
  });
  if (objectWithName !== undefined) {
    if (Object.keys(objectWithName).includes(prop))
      return objectWithName[`${prop}`];
    else return "no such property";
  } else return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));
