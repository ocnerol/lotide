// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: ", actual, "!==", expected);
  } else {
    console.log("✅✅✅ Assertion Passed: ", actual, "===", expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2.00, 2);
assertEqual(5, "5");
assertEqual("dog", "dog");
assertEqual("kitten", "kitteN");
assertEqual(34.01, 34.00);