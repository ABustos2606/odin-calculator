function sum(a,b) {
	return a+b;
}

function subtract(a,b) {
	return a-b;
}

function multiply(a,b) {
  return a*b;
}

function division(a,b) {
    return a/b;
  }

function power(a,b) {
	return a**b
}

function squareroot(a) {
    return Math.sqrt(a);
  }

function factorial(a) {
	let counter = a;
  let total = 1;
  while (counter > 0){
    total = counter * total;
    counter -= 1;
  }
  return total;
}

function fraction(a) {
    return 1/a;
}

function plusminus(a) {
    return a*-1;
}

console.log(division(8,7))
