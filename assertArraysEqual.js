const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ The given arrays ", arr1, " and ", arr2, " are equal!");
  } else {
    console.log("🛑🛑🛑 The given arrays ", arr1, " and ", arr2, "are not equal!");
  }
};

assertArraysEqual([1,2,3],[1,2,3]); //  => true
assertArraysEqual([1,3,3],[1,2,3]); //  => false
assertArraysEqual(["lighthouse", "labs", "web"],["lighthouse", "labs", "web"]); //  => true
assertArraysEqual(["0", "1", "2"],["0", "1", 2]); //  => false