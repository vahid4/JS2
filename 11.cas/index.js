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
  for (i = 0; i <= contacts.length; i++) {
    if (this.contacts.firstName.includes(name)) {
      if (this.contacts.includes(prop)) {
        return "nesto";
      } else return "zadati prop se ne nalazi u listi objekata";
    } else return "zadati name se ne nalazi u listi objekata";
  }
}

console.log(lookUpProfile("Akira", "likes"));
