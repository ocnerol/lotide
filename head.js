const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const head = function(array) {
  return array[0]
};

assertEqual(head([]), undefined);
assertEqual(head([]), null);
assertEqual(head([3]), 3);
assertEqual(head(["this", "old", "dog"]), "old");
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");