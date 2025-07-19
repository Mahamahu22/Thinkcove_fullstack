const num1 = 40;
const num2 = 50;
const num3 = 60;

const findLargest = (a, b, c) => {
  let largest;

  if (a >= b && a >= c) {
    largest = a;
  } else if (b >= a && b >= c) {
    largest = b;
  } else {
    largest = c;
  }

  console.log(`The largest number among ${a}, ${b}, and ${c} is: ${largest}`);
};

findLargest(num1, num2, num3);
