const str = "Pera ima devojku.";

function nekaF(parameter) {
  let novistr = "";
  for (let i = 0; i < parameter.length; i++) {
    if (parameter.length % 2 !== 0 && i === parameter.length - 1) {
      novistr += parameter[i];
    } else if (i % 2 === 0) {
      novistr += parameter[i + 1];
    } else if (i % 2 !== 0) novistr += parameter[i - 1];
  }
  return novistr;
}

console.log(nekaF(str));
console.log(1);
