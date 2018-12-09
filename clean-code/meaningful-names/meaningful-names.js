/*
Write meaningful names
*/

// BAD Code
function div(x, y) {
  const val = x / y;
  return val;
}

// Good Code - 1
function divide(dividend, divisor) {
  const quotient = dividend / divisor;
  return quotient;
}

// Good Code - 2
storage.removeEntity();
heroDispatchers.getHeroes();
toastService.openSnackBar(message, title);