let array = [10, 3, 4, 23, 28, 90];
let sum = array.reduce((acc, element) => {
  return acc + element;
}, 0);

console.log(sum);
