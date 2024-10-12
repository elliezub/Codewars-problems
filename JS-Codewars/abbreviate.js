function abbrevName(name) {
  // need to split when there is a space
  // then take the first index of each str and return with . between
  let names = name.split(" ");
  return names
    .map((name) => name[0])
    .join(".")
    .toUpperCase();
}

console.log(abbrevName("ash Ketchum")); //output: A.K
