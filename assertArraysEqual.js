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

assertArraysEqual([1,2,3],[1,2,3]); //  => true
assertArraysEqual([1,3,3],[1,2,3]); //  => false
assertArraysEqual(["lighthouse", "labs", "web"],["lighthouse", "labs", "web"]); //  => true
assertArraysEqual(["0", "1", "2"],["0", "1", 2]); //  => false