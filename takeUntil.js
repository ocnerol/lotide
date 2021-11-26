const assertArraysEqual = function(arr1, arr2) {

  const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };

  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ The given arrays ", arr1, " and ", arr2, " are equal!");
  } else {
    console.log("🛑🛑🛑 The given arrays ", arr1, " and ", arr2, "are not equal!");
  }
};
/*
The function will return a "slice of the array with elements taken from the beginning."
It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.
*/

const takeUntil = function(array, callback) {
  /*
  logic
  define a result variable with an initial value of an empty array
  loop through entire array
  for each item in array: check to see if calling the callback with that item as its paramater produces true
  // if true, return result array
  // else, push item into result array
  // end loop
  // after loop, return result array (means no item ever satisfied the predicate)
  */

  let result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

const data1 = [-1, -2, -5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x > 0);
assertArraysEqual(results1, [-1, -2, -5]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "never", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === 'never');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", ",", "I've"]);