for (let i = 0; i < 3; i++) {
  console.log("Dentro il ciclo (let): " + i);
}
console.log("Fuori dal ciclo (let): " + i);

for (var j = 0; j < 3; j++) {
  console.log("Dentro il ciclo (var): " + j);
}
console.log("Fuori dal ciclo (var): " + i);
