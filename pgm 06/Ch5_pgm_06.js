var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);

function showSum(a, b) {
    console.log("The sum of " + a + " and " + b + " is " + (a + b));
}

showSum(56,74);

function showProduct(a, b) {
    console.log("The product of " + a + " and " + b + " is " + (a * b));
}

showProduct(3,5);
showProduct(7,8);
showProduct(9,10);

function showDifference(a, b) {
    console.log("The difference between " + a + " and " + b + " is " + (a - b));
}

showDifference(100, 50);
showDifference(75, 25);
showDifference(40, 15);

function showQuotient(a, b) {
    if (b !== 0) {
        console.log("The quotient of " + a + " divided by " + b + " is " + (a / b));
    } else {
        console.log("Division by zero is not allowed.");
    }
}

showQuotient(20, 4);
showQuotient(50, 5);
showQuotient(100, 10);
