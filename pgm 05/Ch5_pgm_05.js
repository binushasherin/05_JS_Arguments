var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);


function cube(number) {
    return number * number * number;
}

console.log("Cubing 3:", cube(3));
console.log("cubing 4:", cube(4));
console.log("cubing 5:", cube(5));
console.log("cubing 6:", cube(6));

function squareRoot(number) {
    return Math.sqrt(number);
}

console.log("The square root of 9 is:", squareRoot(9));
console.log("The square root of 16 is:", squareRoot(16));
console.log("The square root of 25 is:", squareRoot(25));
console.log("The square root of 36 is:", squareRoot(36));