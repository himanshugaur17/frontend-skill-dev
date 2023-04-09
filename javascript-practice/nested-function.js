var a = 10,
  b = 5,
  c = 6,
  d = 2;

const multiplyByDivsior = (a, b) => {
  var div = a / b;
  const mutliply = (c, d) => {
    return c * d * div;
  };
  return mutliply;
};

const fWithDivAsTwo = multiplyByDivsior(10, 5);
console.log(fWithDivAsTwo(c, d));
const fWithDivAsThree = multiplyByDivsior(15, 5);
console.log(fWithDivAsThree(c, d));
