const str = "Pera ima devojku";

function nekaF(parameter) {
  let novistr = "";
  for (let i = 0; i < parameter.length; i++) {
    if (i % 2 === 0) {
      novistr += parameter[i + 1];
    }
  }
  return novistr;
}

console.log(nekaF(str));
